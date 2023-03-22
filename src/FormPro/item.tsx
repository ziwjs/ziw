import React from 'react';
import {
  Rate,
  Input,
  Radio,
  Switch,
  Select,
  Slider,
  Checkbox,
  Cascader,
  DatePicker,
  TimePicker,
  InputNumber,
} from 'antd';
import { SelectTable } from '../index';

const { TextArea } = Input;
const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;
const CheckboxGroup = Checkbox.Group;

const style = { width: '100%' };

// 判断 type 类型
export const caseType = (type: 'Input', props: any) => {
  const caseType = {
    Rate: <Rate {...props} />,
    Input: <Input {...props} />,
    Select: <Select {...props} />,
    Switch: <Switch {...props} />,
    Slider: <Slider {...props} />,
    Cascader: <Cascader {...props} />,
    RadioGroup: <RadioGroup {...props} />,
    TextArea: <TextArea rows={5} {...props} />,
    CheckboxGroup: <CheckboxGroup {...props} />,
    TimePicker: <TimePicker style={style} {...props} />,
    DatePicker: <DatePicker style={style} {...props} />,
    RangePicker: <RangePicker style={style} {...props} />,
    InputNumber: <InputNumber style={style} {...props} />,
    SelectTable: <SelectTable style={style} {...props} />,
  };
  return caseType[type] || <Input {...props} />;
};

// 判断布局
export const layoutCase = {
  vertical: 'vertical',
  horizontal: 'horizontal',
};
