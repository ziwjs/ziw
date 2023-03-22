import React from 'react';
import { Button, Space } from 'antd';
import { ButtonGroupProps } from '../types/ButtonGroup';

const Index = (props: ButtonGroupProps) => {
  const { button, splitSize = 'middle', wrap = true, size = 'middle', ...others } = props;

  return (
    <Space {...others} size={splitSize} wrap={wrap}>
      {Array.isArray(button) &&
        button.map(({ label, size: _size, ...others }, index) => (
          <Button key={index} {...others} size={_size || size}>
            {label || ''}
          </Button>
        ))}
    </Space>
  );
};

export default Index;
