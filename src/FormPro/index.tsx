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
} from 'antd';
import type { Rule } from 'antd/es/form';
import React, { forwardRef, useImperativeHandle } from 'react';
import { asyncAwaitForms } from './utils';
export interface FormProProps {
  /*
  dataSource: 表单组
  */
  dataSource?: {
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
  }[];
  span?: number;
}
const Index = forwardRef((props: FormProProps, ref) => {
  const { TextArea } = Input;
  const RadioGroup = Radio.Group;
  const { RangePicker } = DatePicker;
  const CheckboxGroup = Checkbox.Group;
  const { dataSource = [], span = 6 } = props;

  useImperativeHandle(ref, () => ({
    ...(ref?.current || {}),
    getFormValue: async () => await asyncAwaitForms(ref?.current),
  }));

  // 判断 type 类型
  const caseType = (type: string, props: any) => {
    const style = { width: '100%' };
    const caseType = {
      Cascader: <Cascader {...props} />,
      Checkbox: <Checkbox {...props} />,
      CheckboxGroup: <CheckboxGroup {...props} />,
      DatePicker: <DatePicker style={style} {...props} />,
      RangePicker: <RangePicker style={style} {...props} />,
      InputNumber: <InputNumber style={style} {...props} />,
      TextArea: <TextArea rows={1} {...props} />,
      Radio: <Radio {...props} />,
      RadioGroup: <RadioGroup {...props} />,
      Select: <Select {...props} />,
      Switch: <Switch {...props} />,
      Rate: <Rate {...props} />,
      TimePicker: <TimePicker style={style} {...props} />,
    };
    return caseType[type] || <Input {...props} />;
  };

  // 表单渲染
  const getFields = () => {
    const children: any[] = [];
    if (Array.isArray(dataSource)) {
      dataSource.forEach(({ type, key, rules, label, ...other }) => {
        return children.push(
          <Col xl={typeof span === 'number' ? span : 6} lg={8} md={12} sm={24} xs={24} key={key}>
            <Form.Item name={key} label={label || ' '} rules={rules}>
              {caseType(type, other)}
            </Form.Item>
          </Col>,
        );
      });
    }
    return children;
  };

  return (
    <Form layout="vertical" ref={ref}>
      <Row gutter={{ sm: 24 }}>{getFields()}</Row>
    </Form>
  );
});

export default Index;
