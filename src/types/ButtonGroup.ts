import type { ButtonProps, SpaceProps } from 'antd';

export declare type Size = 'large' | 'middle' | 'small';
export interface ButtonGroupProps extends SpaceProps {
  // button: 按钮组
  button?: Array<ButtonProps & { label: string }>;
  // 设置按钮大小
  size?: Size;
  // splitSize: 间距大小
  splitSize?: Size | number;
}
