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
    onChange,
    onDeselect,
    value: _value,
    dropdownStyle,
    labelInValue = false,
    placeholder = '请选择',
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
    onChange,
    fieldNames,
    labelInValue,
    dataSource: options,
  };
  const isMode = mode === 'multiple' || mode === 'tags';
  const isOnChange = typeof onChange === 'function';
  // Select props
  const payload = {
    mode,
    value,
    options,
    fieldNames,
    placeholder,
    labelInValue,
    showSearch: true,
    ...otherPrors,
    open,
    defaultActiveFirstOption: false,
    dropdownStyle: { padding: 12, ...dropdownStyle },
    dropdownRender: () => <DropdownRender {...dropdownRenderProps} />,
    onClear: () => {
      const clerar = setTimeout(() => {
        if (isMode) {
          setValue([]);
          isOnChange && onChange([], []);
        } else {
          setValue(undefined);
          isOnChange && onChange(undefined, undefined);
        }
        typeof onClear === 'function' && onClear();
      }, 0);
      return () => clearTimeout(clerar);
    },
    onDeselect: (record: string | number | LabeledValue, option) => {
      if (isMode) {
        if (labelInValue) {
          const { value: _value, label } = record;
          setValue(value.filter((item: LabeledValue) => item?.value !== _value));
          isOnChange &&
            onChange({ [fieldNames?.value]: _value, [fieldNames?.label]: label }, option);
        } else {
          setValue(value.filter((item: string | number) => item !== record));
          isOnChange && onChange(record, option);
        }
      }
      typeof onDeselect === 'function' && onDeselect(record, option);
    },
    onDropdownVisibleChange: (open: boolean) => {
      setOpen(open);
      typeof onDropdownVisibleChange === 'function' && onDropdownVisibleChange(open);
    },
  };
  return <Select {...payload} />;
}
