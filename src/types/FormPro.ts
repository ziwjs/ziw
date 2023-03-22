import type { Rule } from 'antd/es/form';
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
  onSubmit: (data: any) => void;
  onReset: () => void;
}
