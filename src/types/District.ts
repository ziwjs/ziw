export declare type Value = string | number;

export interface OptionType {
  value?: Value;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: OptionType[];
  isLeaf?: boolean;
}

export interface SelectedOptions {
  value?: Value;
  label?: React.ReactNode;
  type?: string;
  loading?: boolean;
  children?: OptionType[];
}
[];
