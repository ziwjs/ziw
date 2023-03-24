import React, { forwardRef, useImperativeHandle, Fragment, useState } from 'react';
import { Col, Form, Row } from 'antd';
import { DownOutlined, UpOutlined, ReloadOutlined, ZoomInOutlined } from '@ant-design/icons';
import { ButtonGroup } from '../index';
import type { FormProProps } from '../types/FormPro';
import type { FormItemProps } from 'antd/lib/form/FormItem';
import { asyncAwaitForms, _setFormValue } from './utils';
import { caseType, layoutCase, sortColumns } from './item';
import { isFunction, isFunctionReturnArray } from '../utils';
import styles from './index.less';

const Index = forwardRef((props: FormProProps, ref: any) => {
  const [form] = Form.useForm();

  // 父组件传递参数
  const {
    onReset,
    onSubmit,
    columns = [],
    type = 'form',
    displayPre = 0,
    layout = 'vertical',
    ...others
  } = props;

  // 搜索表单控制是否展开
  const [expand, setExpand] = useState(false);
  // 显示 form-list 控件 Col布局参数
  const [isDisplayPre] = useState(typeof displayPre === 'number' && displayPre > 0);

  // ref 暴露方法
  useImperativeHandle(ref, () => ({
    ...(ref?.current || {}),
    getFormValue: async () => await asyncAwaitForms(ref?.current),
    setFormValue: (target = {}) => _setFormValue(ref?.current, target),
  }));

  // 查询按钮事件
  const search = async () => {
    if (!ref) {
      // 获取表单中的数据
      const formData = form.getFieldsValue();
      // 触发验证
      const validate = await form.validateFields();
      if (Array.isArray(validate.errorFields)) return;
      isFunction(onSubmit, formData);
    }
    // 获取表单中的数据
    const data = await asyncAwaitForms(ref?.current);
    if (!data) return;
    isFunction(onSubmit, data);
  };

  // 重置按钮事件
  const reset = () => {
    if (ref) isFunction(ref?.current?.resetFields);
    else form.resetFields();
    isFunction(onReset);
  };

  // 显示 form-list 控件 Col布局参数
  const colItemLayout = (index: number, num: number) => {
    const showFun = (_num: number) => (isDisplayPre && displayPre <= index && !expand ? 0 : _num);
    return {
      xl: showFun(num),
      lg: showFun(8),
      md: showFun(12),
      sm: showFun(24),
      xs: showFun(24),
    };
  };

  // 表单渲染
  const getFields = () => {
    // 用于存储表单控件
    const children: any[] = [];
    //为了兼容函数调用
    const _columns = sortColumns(isFunctionReturnArray(columns));
    if (Array.isArray(_columns)) {
      // 循环♻️遍历数组源
      _columns.forEach(
        (
          {
            key,
            help,
            rules,
            span = 6,
            type: _type,
            label = ' ',
            hasFeedback,
            validateStatus,
            ...other
          },
          index,
        ) => {
          const payload: FormItemProps = {
            label,
            rules,
            help,
            name: key,
            hasFeedback,
            validateStatus,
          };
          if (_type === 'TextArea') span = 24;
          // 解决控制 [antd: Switch] `value` is not a valid prop, do you mean `checked`? 错误
          if (_type === 'Switch') payload.valuePropName = 'checked';
          return children.push(
            <Col key={key} className={styles.leftCol} {...colItemLayout(index, span)}>
              <Form.Item {...payload}>{caseType(_type, other)}</Form.Item>
            </Col>,
          );
        },
      );
      // 查询模式添加一列显示
      type === 'searchForm' &&
        children.push(
          <Col {...colItemLayout(-1, 6)} key="query" className={styles.rightCol}>
            <Form.Item label=" ">
              <ButtonGroup
                splitSize={6}
                button={[
                  {
                    type: 'primary',
                    label: '查询',
                    onClick: search,
                    htmlType: 'submit',
                    icon: <ZoomInOutlined />,
                  },
                  { label: '重置', onClick: reset, icon: <ReloadOutlined /> },
                ]}
              />
              {displayPre < _columns.length && (
                <a onClick={() => setExpand(!expand)} className={styles.minWidth}>
                  {expand ? <UpOutlined /> : <DownOutlined />}
                  {expand ? '收起' : '展开'}
                </a>
              )}
            </Form.Item>
          </Col>,
        );
    }
    return children;
  };

  return (
    <Form form={form} {...others} layout={layoutCase[layout] || 'vertical'} ref={ref} labelWrap>
      <Row gutter={{ sm: 24 }} className={styles.rowBox}>
        {getFields()}
      </Row>
    </Form>
  );
});

export default Index;
