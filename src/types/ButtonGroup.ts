import { ReactNode } from 'react';

export interface ButtonGroupProps {
  // button: 按钮组
  button?: {
    // label: 按钮名称
    label: string;
  }[];
  // 设置按钮大小
  size: 'large' | 'middle' | 'small';
  // splitSize: 间距大小
  splitSize?: 'large' | 'middle' | 'small' | number;
  // split: 设置拆分
  split?: ReactNode;
  // direction: 设置方向
  direction?: 'vertical' | 'horizontal';
  // wrap: 是否自动换行，仅在 horizontal 时有效
  wrap?: boolean;
}
