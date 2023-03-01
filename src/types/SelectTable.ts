import { CSSProperties } from 'react';

declare type Mode = 'multiple' | 'tags' | undefined;
declare type RawValue = string | number;
export interface LabeledValue {
  key?: string;
  value: RawValue;
  label: React.ReactNode;
}

export declare type Value = RawValue | RawValue[] | LabeledValue | LabeledValue[] | undefined;

interface FieldNames {
  value?: string;
  label?: string;
  options?: string;
}

export interface SelectTableProps {
  // 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新）
  value: Value;
  // 设置 SelectTable 的模式为多选或标签
  mode?: Mode;
  //   设置样式
  style?: CSSProperties;
  // 选择框默认文本
  placeholder?: string;
  // 下拉菜单的 style 属性
  dropdownStyle?: CSSProperties;
  // 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式
  labelInValue?: boolean;
  // 展开下拉菜单的回调
  onDropdownVisibleChange?: (open: boolean) => void;
  // 自定义节点 label、value、options 的字段
  fieldNames?: FieldNames;
  // 加载中状态
  loading?: boolean;
  // 清除内容时回调
  onClear?: () => void;
  // 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效
  onDeselect?: (value: Value, option: any) => void;

  onChange?: (value: any, option: any) => void;
  columns: any[];
  options: any[];
}

export interface DropdownRenderProps {
  value?: Value;
  mode?: Mode;
  fieldNames?: FieldNames;
  labelInValue?: boolean;
  loading?: boolean;
  // 选中 option，或 input 的 value 变化时，调用此函数
  onChange?: (value: any, option: any) => void;
  columns?: any;
  dataSource: any;
  originNode?: any;
  setValue: any;
  setOpen: any;
}
