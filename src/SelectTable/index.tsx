import React, { useState } from 'react';
import { Select } from 'antd';
import DropdownRender from './dropdownRender';

export default function SelectTable(props: any) {
  const {
    mode,
    columns,
    options,
    labelInValue = false,
    fieldNames = { label: 'label', value: 'value' },
  } = props;

  // 控制下拉框的显示
  let [open, setOpen] = useState(false);

  // 控制输入框的值
  let [value, setValue] = useState(undefined);

  // DropdownRender props
  const dropdownRenderProps = {
    mode,
    value,
    columns,
    setOpen,
    setValue,
    fieldNames,
    labelInValue,
    dataSource: options,
  };

  // Select props
  const payload = {
    open,
    mode,
    value,
    options,
    fieldNames,
    labelInValue,
    showSearch: true,
    showArrow: false,
    style: { minWidth: 300 },
    dropdownStyle: { padding: 12 },
    defaultActiveFirstOption: false,
    onDropdownVisibleChange: (open: boolean) => setOpen(open),
    dropdownRender: () => <DropdownRender {...dropdownRenderProps} />,
  };
  return <Select {...payload} />;
}
