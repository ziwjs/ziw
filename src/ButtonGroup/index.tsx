import React from 'react';
import { Button, Space } from 'antd';
import type { ButtonGroupProps, CustomButtonProps } from '../types/ButtonGroup';

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  wrap = true,
  button = [],
  size = 'middle',
  splitSize = 'middle',
  ...others
}) => {
  const renderButton = (
    { label = '', size: customSize, key, ...rest }: CustomButtonProps,
    index: number,
  ) => (
    <Button key={`button_${key || index}`} {...rest} size={customSize || size}>
      {label}
    </Button>
  );

  return (
    <Space {...others} size={splitSize} wrap={wrap}>
      {Array.isArray(button) && button.map((item, index) => renderButton(item, index))}
    </Space>
  );
};

export default ButtonGroup;
