import type { ButtonProps } from 'antd';

export interface ButtonGroupProps {
  // button: 按钮组
  button?: Array<ButtonProps & { label: string }>;
  // 设置按钮大小
  size: 'large' | 'middle' | 'small';
  // splitSize: 间距大小
  splitSize?: 'small' | 'middle' | 'large' | number;
  // wrap: 是否自动换行，仅在 horizontal 时有效
  wrap?: boolean;
}
