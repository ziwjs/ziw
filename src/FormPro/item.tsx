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
import SelectTable from '../SelectTable';
import type { Type, Layout } from '../types/FormPro';

const { TextArea } = Input;
const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;
const CheckboxGroup = Checkbox.Group;

type ControlMap = Record<Type, JSX.Element>;

enum LayoutType {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

const style = { width: '100%' };

const controlMap: ControlMap = {
  Rate: <Rate />,
  Input: <Input />,
  Select: <Select />,
  Switch: <Switch />,
  Slider: <Slider />,
  Cascader: <Cascader />,
  RadioGroup: <RadioGroup />,
  TextArea: <TextArea rows={5} />,
  CheckboxGroup: <CheckboxGroup />,
  TimePicker: <TimePicker style={style} />,
  DatePicker: <DatePicker style={style} />,
  RangePicker: <RangePicker style={style} />,
  InputNumber: <InputNumber style={style} />,
  SelectTable: <SelectTable style={style} />,
};

export const caseType = (type: Type = 'Input', props: any) => {
  const control = controlMap[type] || controlMap.Input;
  return React.cloneElement(control, props);
};

export const layoutCase = { ...LayoutType };

export const sortColumns = <T extends { order: number }>(columns: T[]) =>
  columns.sort((a, b) => a.order - b.order);
