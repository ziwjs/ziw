import React, { useState } from 'react';
import { Select } from 'antd';
import DropdownRender from './dropdownRender';
import type { SelectValue, LabeledValue } from 'antd/lib/select';
import type { SelectTableProps, DropdownRenderProps, RawValue } from '../types/SelectTable';
import { isFunction, isFunctionReturnArray } from '../utils';

const SelectTable = ({
  mode,
  loading,
  onClear,
  onChange,
  onDeselect,
  columns = [],
  options = [],
  value: _value,
  dropdownStyle,
  open: _open = false,
  labelInValue = false,
  placeholder = '请选择',
  onDropdownVisibleChange,
  fieldNames = { label: 'label', value: 'value' },
  ...otherPrors
}: SelectTableProps) => {
  const [open, setOpen] = useState<boolean>(_open);

  const [value, setValue] = useState<SelectValue>(_value);

  const isMode: boolean = ['multiple', 'tags'].includes(mode || '');

  const dropdownRenderProps: DropdownRenderProps = {
    value,
    setOpen,
    loading,
    onChange,
    setValue,
    fieldNames,
    labelInValue,
    isMultiple: isMode,
    columns: isFunctionReturnArray(columns),
    dataSource: isFunctionReturnArray(options),
  };

  const myOnClear = () => {
    const timerId = setTimeout(() => {
      if (isMode) {
        setValue([]);
        isFunction(onChange, [], []);
      } else {
        setValue(undefined);
        isFunction(onChange, undefined, undefined);
      }
      isFunction(onClear);
    }, 0);
    return () => clearTimeout(timerId);
  };

  const myOnDropdownVisibleChange = (open: boolean) => {
    setOpen(open);
    isFunction(onDropdownVisibleChange, open);
  };

  const myOnDeselect = (record: any) => {
    if (isMode) {
      if (labelInValue) {
        const { value: _value, label } = record;
        const fieldValue = fieldNames?.value || 'value';
        const fieldLabel = fieldNames?.label || 'label';
        setValue((value as LabeledValue[])?.filter((item: LabeledValue) => item?.value !== _value));
        isFunction(onChange, { [fieldValue]: _value, [fieldLabel]: label });
      } else {
        setValue((value as RawValue[])?.filter((item: RawValue) => item !== record));
        isFunction(onChange, record);
      }
    }
    isFunction(onDeselect, record);
  };

  const payload = {
    mode,
    value,
    loading,
    fieldNames,
    placeholder,
    labelInValue,
    showSearch: true,
    options: isFunctionReturnArray(options),
    ...otherPrors,
    open,
    onClear: myOnClear,
    onDeselect: myOnDeselect,
    defaultActiveFirstOption: false,
    dropdownStyle: { padding: 12, ...dropdownStyle },
    onDropdownVisibleChange: myOnDropdownVisibleChange,
    dropdownRender: () => <DropdownRender {...dropdownRenderProps} />,
  };
  return <Select {...payload} />;
};
export default SelectTable;
