import React, { Fragment, ReactNode } from 'react';
import { Button, Space } from 'antd';
export interface ButtonGroupProProps {
  /*
  size: 间距大小
  split: 设置拆分
  direction: 间距方向
  button: 按钮组
  wrap: 是否自动换行，仅在 horizontal 时有效
  */
  size?: number;
  split?: ReactNode;
  direction?: 'vertical' | 'horizontal';
  wrap?: boolean;
  button?: {
    label: string;
  }[];
}
const Index = (props: ButtonGroupProProps) => {
  const { button, size = 24, split = null, direction = 'horizontal', wrap = false } = props;
  return (
    <Space size={size} split={split} direction={direction} wrap={wrap}>
      {Array.isArray(button) && (
        <Fragment>
          {button.map(({ label, ...other }, index) => (
            <Button key={index} {...other}>
              {label || ''}
            </Button>
          ))}
        </Fragment>
      )}
    </Space>
  );
};

export default Index;
