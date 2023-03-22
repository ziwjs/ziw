import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { DropdownRenderProps } from '../types/SelectTable';
import { isFunction, isFunctionReturnArray } from '../utils';
import './style.less';

export default function DropdownRender(props: DropdownRenderProps) {
  const {
    value,
    columns,
    dataSource,
    setValue,
    setOpen,
    labelInValue,
    mode,
    fieldNames,
    onChange,
    loading,
  } = props;

  // columns 是否存在 fieldNames?.value fieldNames?.label
  const dataIndexTrue = [fieldNames?.value, fieldNames?.label].every((item) =>
    columns.map((item: any) => item.dataIndex).includes(item),
  );
  // 多选存储选中的值
  let [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    setSelectedRowKeys(isFunctionReturnArray(value));
  }, [value]);

  // 添加样式
  const rowClassName = (record: any) => {
    if (!dataIndexTrue) return '';
    //  添加选中样式
    let styleStr = '';
    const { [fieldNames?.value]: _value, disabled = false } = record;
    // 禁用样式
    if (disabled) styleStr += 'disabled ';
    // 选择模式 多选
    const isMultiple = ['multiple', 'tags'].includes(mode);
    // 是否添加样式
    let isAddStyle = false;
    if (isMultiple) {
      // 开启 { value: string, label: ReactNode } 的格式
      if (labelInValue)
        isAddStyle = selectedRowKeys.find((item) => item?.value === _value) || false;
      // 未开启 { value: string, label: ReactNode } 的格式
      else isAddStyle = selectedRowKeys.find((item) => item === _value) || false;
    } else
      isAddStyle =
        (_value && (value?.value || value) && _value === (value?.value || value)) || false;
    isAddStyle ? (styleStr += 'ant-table-row-selected') : styleStr;
    return styleStr;
  };

  // 点击table列
  const onRow = (record: any) => {
    const { [fieldNames?.value]: value, [fieldNames?.label]: label, disabled = false } = record;
    // 禁用不可点击
    if (disabled) return;
    // 选择模式 多选
    if (['multiple', 'tags'].includes(mode)) {
      let _selectedRowKeys = [...selectedRowKeys];
      // labelInValue : 是否开启 object 模式
      if (labelInValue) {
        const isSelect = _selectedRowKeys.find((item) => item?.value === value);
        // 未选中进行添加
        if (!isSelect) _selectedRowKeys.push({ value, label });
        // 已选中进行删除
        else _selectedRowKeys = _selectedRowKeys.filter((item) => item?.value !== value);
        // 传递数据
        const payload = _selectedRowKeys.map(() => {
          return {
            [fieldNames?.value]: value,
            [fieldNames?.label]: label,
          };
        });
        isFunction(onChange, payload, record);
      } else {
        // 未选中进行添加
        if (!_selectedRowKeys.find((item) => item === value)) _selectedRowKeys.push(value);
        // 已选中进行删除
        else _selectedRowKeys = _selectedRowKeys.filter((item) => item !== value);
        isFunction(onChange, _selectedRowKeys, record);
      }
      // 更新选中的值
      setSelectedRowKeys(_selectedRowKeys);
      setValue(_selectedRowKeys);
      return;
    }
    // 选择模式 单选
    labelInValue ? setValue({ value, label }) : setValue(value);
    const payload = labelInValue
      ? { [fieldNames?.value]: value, [fieldNames?.label]: label }
      : value;
    isFunction(onChange, payload, record);
    setOpen(false);
  };

  return (
    <Table
      size="small"
      loading={loading}
      columns={columns}
      pagination={false}
      scroll={{ x: 'max-content', y: 250 }}
      rowKey={fieldNames?.value?.toString()}
      dataSource={dataIndexTrue ? dataSource : []}
      rowClassName={(record) => rowClassName(record)}
      onRow={(record) => {
        return {
          onClick: () => onRow(record),
        };
      }}
    />
  );
}
