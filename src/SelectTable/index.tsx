import React, { useState } from 'react';
import { Select } from 'antd';
import DropdownRender from './dropdownRender';
import { SelectTableProps, LabeledValue } from '../types/SelectTable';

export default function SelectTable(props: SelectTableProps) {
  const {
    mode,
    columns,
    options,
    onClear,
    onDeselect,
    value: _value,
    dropdownStyle,
    labelInValue = false,
    onDropdownVisibleChange,
    fieldNames = { label: 'label', value: 'value' },
    ...otherPrors
  } = props;

  // 控制下拉框的显示
  let [open, setOpen] = useState(false);

  // 控制输入框的值
  let [value, setValue] = useState(_value);

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
    mode,
    value,
    options,
    fieldNames,
    labelInValue,
    showSearch: true,
    ...otherPrors,
    open,
    defaultActiveFirstOption: false,
    dropdownStyle: { padding: 12, ...dropdownStyle },
    onDropdownVisibleChange: (open: boolean) => {
      setOpen(open);
      typeof onDropdownVisibleChange === 'function' && onDropdownVisibleChange(open);
    },
    onClear: () => {
      setValue(undefined);
      typeof onClear === 'function' && onClear();
    },
    onDeselect: (record: string | number | LabeledValue, option) => {
      if (mode === 'multiple' || mode === 'tags') {
        if (labelInValue) setValue(value.filter((item: LabeledValue) => item.value !== record));
        else setValue(value.filter((item: string | number) => item !== record));
      }
      typeof onDeselect === 'function' && onDeselect(record, option);
    },
    dropdownRender: () => <DropdownRender {...dropdownRenderProps} />,
  };
  return (
    <>
      <Select {...payload} />
    </>
  );
}
