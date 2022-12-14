import {
  Col,
  Form,
  Input,
  Row,
  Select,
  InputNumber,
  Checkbox,
  DatePicker,
  Radio,
  Switch,
  TimePicker,
  Rate,
  Cascader,
  Slider,
  Button,
} from 'antd';
import { DownOutlined, UpOutlined, ReloadOutlined, ZoomInOutlined } from '@ant-design/icons';
import { asyncAwaitForms, _setFormValue } from './utils';
import styles from './index.less';
import type { Rule } from 'antd/es/form';
import React, { forwardRef, useImperativeHandle, Fragment, useState } from 'react';
export interface FormProProps {
  type?: 'searchForm' | 'form';
  displayPre?: Number;
  initialValues: object;
  columns?: {
    type?:
      | 'Checkbox'
      | 'CheckboxGroup'
      | 'DatePicker'
      | 'RangePicker'
      | 'TextArea'
      | 'InputNumber'
      | 'Radio'
      | 'RadioGroup'
      | 'Select'
      | 'Switch'
      | 'TimePicker'
      | undefined;
    label?: string;
    key: string;
    rules: Rule[];
    span: number;
  }[];
  onSearch: (data: any) => void;
  onReset: () => void;
}
const Index = forwardRef((props: FormProProps, ref) => {
  const { TextArea } = Input;
  const RadioGroup = Radio.Group;
  const { RangePicker } = DatePicker;
  const CheckboxGroup = Checkbox.Group;

  // 父组件传递参数
  const { columns = [], type = 'form', initialValues = {}, onSearch, onReset, displayPre } = props;

  // 搜索表单控制是否展开
  const [expand, setExpand] = useState(false);

  useImperativeHandle(ref, () => ({
    ...(ref?.current || {}),
    getFormValue: async () => await asyncAwaitForms(ref?.current),
    setFormValue: (target = {}) => _setFormValue(ref?.current, target),
  }));

  // 判断 type 类型
  const caseType = (type: string, props: any) => {
    const style = { width: '100%' };
    const caseType = {
      Cascader: <Cascader {...props} />,
      CheckboxGroup: <CheckboxGroup {...props} />,
      DatePicker: <DatePicker style={style} {...props} />,
      RangePicker: <RangePicker style={style} {...props} />,
      InputNumber: <InputNumber style={style} {...props} />,
      TextArea: <TextArea rows={5} {...props} />,
      RadioGroup: <RadioGroup {...props} />,
      Select: <Select {...props} />,
      Switch: <Switch {...props} />,
      Rate: <Rate {...props} />,
      Slider: <Slider {...props} />,
      TimePicker: <TimePicker style={style} {...props} />,
    };
    return caseType[type] || <Input {...props} />;
  };

  // 查询按钮事件
  const search = async () => {
    const data = await asyncAwaitForms(ref?.current);
    if (!data) return;
    onSearch && onSearch(data);
  };
  // 重置按钮事件
  const reset = () => {
    typeof ref?.current?.resetFields === 'function' && ref?.current?.resetFields();
    onReset && onReset();
  };

  // 表单渲染
  const getFields = () => {
    const children: any[] = [];
    // Col布局参数
    const colItemLayout = {
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24,
    };
    const _columns = typeof columns === 'function' ? columns() : columns;
    // 是否显示展开 - 关闭控件
    const isDisplayPre = typeof displayPre === 'number' && displayPre > 0;
    if (Array.isArray(_columns)) {
      // 进行排序，order 值越小排列越靠前
      _columns
        .sort(({ order }, { order: _orde }) => {
          const a = order || 0;
          const b = _orde || 0;
          if (a < b) return 1;
          return -1;
        })
        .reverse();

      // 循环♻️遍历数组源
      _columns.forEach(({ type: _type, key, rules, label = ' ', span = 6, ...other }, index) => {
        const payload = { name: key, label, rules };
        // 解决控制 [antd: Switch] `value` is not a valid prop, do you mean `checked`? 错误
        if (_type === 'Switch') payload.valuePropName = 'checked';
        return children.push(
          <Col
            {...colItemLayout}
            xl={isDisplayPre && displayPre <= index && !expand ? 0 : span}
            key={key}
            className={styles.leftCol}
          >
            <Form.Item {...payload}>{caseType(_type, other)}</Form.Item>
          </Col>,
        );
      });
      // 查询模式添加一列显示
      type === 'searchForm' &&
        children.push(
          <Col {...colItemLayout} key="query" className={styles.rightCol}>
            <Form.Item label=" ">
              <Button type="primary" onClick={search}>
                <ZoomInOutlined /> 查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={reset}>
                <ReloadOutlined /> 重置
              </Button>
              {isDisplayPre && displayPre < _columns.length && (
                <a onClick={() => setExpand(!expand)} className={styles.minWidth}>
                  {expand ? (
                    <Fragment>
                      <UpOutlined />
                      关闭
                    </Fragment>
                  ) : (
                    <Fragment>
                      <DownOutlined /> 展开
                    </Fragment>
                  )}
                </a>
              )}
            </Form.Item>
          </Col>,
        );
    }
    return children;
  };

  return (
    <Form layout="vertical" ref={ref} initialValues={initialValues}>
      <Row gutter={{ sm: 24 }} className={styles.rowBox}>
        {getFields()}
      </Row>
    </Form>
  );
});

export default Index;
