import type { TableProps, SelectProps } from 'antd';
import type { FieldNames } from 'rc-select/lib/Select';
import type { SelectValue, LabeledValue } from 'antd/lib/select';

export declare type RawValue = string | number;
export interface SelectTableProps extends Omit<SelectProps, 'onChange'> {
  columns?: TableProps<any>['columns'];
  onChange?: (payload: SelectValue, record?: LabeledValue | LabeledValue[]) => void;
}
export interface DropdownRenderProps {
  loading?: boolean;
  dataSource?: any[];
  value?: SelectValue;
  isMultiple?: boolean;
  labelInValue?: boolean;
  fieldNames?: FieldNames;
  setOpen: (open: boolean) => void;
  columns?: TableProps<any>['columns'];
  setValue: (value: SelectValue) => void;
  onChange?: (payload: SelectValue, record?: LabeledValue | LabeledValue[]) => void;
}
