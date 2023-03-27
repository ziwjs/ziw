import React, { useState } from 'react';
import { Select } from 'antd';
import DropdownRender from './dropdownRender';
import type { SelectValue } from 'antd/lib/select';
import type { SelectTableProps, DropdownRenderProps } from '../types/SelectTable';
import { isFunction, isFunctionReturnArray } from '../utils';

export default function SelectTable(props: SelectTableProps) {
  const {
    mode,
    loading,
    onClear,
    onChange,
    onDeselect,
    columns = [],
    options = [],
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
  let [value, setValue] = useState(_value) as [SelectValue, (value: SelectValue) => void];

  // DropdownRender props
  const dropdownRenderProps: DropdownRenderProps = {
    mode,
    value,
    setOpen,
    loading,
    onChange,
    setValue,
    fieldNames,
    labelInValue,
    columns: isFunctionReturnArray(columns),
    dataSource: isFunctionReturnArray(options),
  };

  // 是否多选
  const isMode = ['multiple', 'tags'].includes(mode || '');

  // 清除内容时回调
  const myOnClear = () => {
    const clerar = setTimeout(() => {
      if (isMode) {
        setValue([]);
        isFunction(onChange, [], []);
      } else {
        setValue(undefined);
        isFunction(onChange, undefined, undefined);
      }
      isFunction(onClear);
    }, 0);
    return () => clearTimeout(clerar);
  };

  // 展开下拉菜单的回调
  const myOnDropdownVisibleChange = (open: boolean) => {
    setOpen(open);
    isFunction(onDropdownVisibleChange, open);
  };

  // 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效
  const myOnDeselect = (record: any) => {
    if (isMode) {
      if (labelInValue) {
        const { value: _value, label } = record;
        Array.isArray(value) && value.filter;
        setValue(value?.filter((item: SelectValue) => item?.value !== _value));
        isFunction(onChange, { [fieldNames?.value]: _value, [fieldNames?.label]: label });
      } else {
        setValue(value.filter((item: string | number) => item !== record));
        isFunction(onChange, record);
      }
    }
    isFunction(onDeselect, record);
  };

  // Select props
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
}
