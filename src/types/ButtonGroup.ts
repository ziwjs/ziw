import { ReactNode } from 'react';
import type { SpaceProps, ButtonProps } from 'antd';

export declare type Size = 'large' | 'middle' | 'small';

export type CustomButtonProps = ButtonProps & {
  label?: ReactNode;
  key?: string | number;
};

export type ButtonGroupProps = Omit<SpaceProps, 'size'> & {
  size?: Size;
  wrap?: boolean;
  splitSize?: Size | number;
  button?: CustomButtonProps[];
};
