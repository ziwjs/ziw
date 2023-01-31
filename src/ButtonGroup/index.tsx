import React from 'react';
import { Button, Space } from 'antd';
import { ButtonGroupProps } from '../types/ButtonGroup';

const Index = (props: ButtonGroupProps) => {
  const {
    button,
    splitSize = 'middle',
    split = null,
    direction = 'horizontal',
    wrap = true,
    size = 'middle',
  } = props;

  return (
    <Space size={splitSize} split={split} direction={direction} wrap={wrap}>
      {Array.isArray(button) &&
        button.map(({ label, size: _size, ...other }, index) => (
          <Button key={index} {...other} size={_size ? _size : size}>
            {label || ''}
          </Button>
        ))}
    </Space>
  );
};

export default Index;
