import type { FormProps } from 'antd';
import type { FormItemProps } from 'antd/lib/form';

export declare type Layout = 'horizontal' | 'vertical';

export declare type Type =
  | 'Rate'
  | 'Input'
  | 'Select'
  | 'Switch'
  | 'Slider'
  | 'Cascader'
  | 'TextArea'
  | 'TimePicker'
  | 'DatePicker'
  | 'RadioGroup'
  | 'RangePicker'
  | 'InputNumber'
  | 'SelectTable'
  | 'CheckboxGroup';

export type Column = FormItemProps & {
  key?: string;
  span?: number;
  type?: Type;
  order?: number;
};
export interface FormProProps extends FormProps {
  displayPre?: number;
  layout?: Layout;
  columns?: Column[] | (() => Column[]);
  type?: 'searchForm' | 'form';
  onSubmit?: (value: any) => void;
  onReset?: (value: any) => void;
}
