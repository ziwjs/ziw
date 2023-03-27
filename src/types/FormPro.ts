import type { FormProps } from 'antd';
import type { FormItemProps } from 'antd/lib/form/FormItem';

// item 类型
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
  | 'CheckboxGroup'
  | undefined;

// 布局
export declare type Layout = 'horizontal' | 'vertical' | undefined;

export interface FormProProps extends FormProps {
  // 显示列数
  displayPre?: number;
  // 表单类型
  type?: 'searchForm' | 'form';
  // 表单布局
  layout?: Layout;
  columns?: FormItemProps &
    {
      type?: Type;
      key: string;
    }[];
  onSubmit: (data: any) => void;
  onReset: () => void;
}
