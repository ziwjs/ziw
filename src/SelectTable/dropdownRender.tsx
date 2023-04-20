import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { isFunction, isFunctionReturnArray } from '../utils';
import type { LabeledValue } from 'antd/lib/select';
import type { DropdownRenderProps, RawValue } from '../types/SelectTable';
import './style.less';

export default function DropdownRender(props: DropdownRenderProps) {
  const {
    value,
    columns,
    setOpen,
    loading,
    setValue,
    onChange,
    isMultiple,
    dataSource,
    fieldNames,
    labelInValue,
  } = props;

  const fieldValue = fieldNames?.value || 'value';

  const fieldLabel = fieldNames?.label || 'label';

  // 是否存在 fieldNames?.value fieldNames?.label
  const dataIndexTrue = [fieldValue, fieldLabel].every((item) =>
    columns?.map((item: any) => item.dataIndex).includes(item),
  );

  let [selectedRowKeys, setSelectedRowKeys] = useState<LabeledValue[] | RawValue[]>([]);

  useEffect(() => {
    setSelectedRowKeys(isFunctionReturnArray(value));
  }, [value]);

  const rowClassName = (record: any) => {
    if (!dataIndexTrue) return '';
    const { [fieldValue]: target = '', disabled = false } = record;
    const isSelected = () => {
      return selectedRowKeys.some((item: LabeledValue | RawValue) =>
        labelInValue ? item && (item as LabeledValue).value === target : item === target,
      );
    };
    const addStyle =
      (isMultiple && isSelected()) ||
      (!isMultiple && target === ((value as LabeledValue)?.value || value));
    // 添加禁用样式和选中样式
    const className = `${disabled ? 'disabled ' : ''}${addStyle ? 'ant-table-row-selected' : ''}`;
    return className;
  };

  const onRow = (record: any) => {
    const { [fieldValue]: value, [fieldLabel]: label, disabled = false } = record;

    if (disabled) return;

    // 处理多选逻辑
    if (isMultiple) {
      const isSelect = selectedRowKeys.some((item: LabeledValue | RawValue) =>
        labelInValue ? item && (item as LabeledValue).value === value : item === value,
      );
      const nextSelectedRowKeys = isSelect
        ? (selectedRowKeys as LabeledValue[])?.filter((item: LabeledValue) =>
            labelInValue ? item?.value !== value : item !== value,
          )
        : [...selectedRowKeys, labelInValue ? { value, label } : value];
      setSelectedRowKeys(nextSelectedRowKeys);
      setValue(nextSelectedRowKeys);
      isFunction(onChange, nextSelectedRowKeys, record);
      return;
    }

    // 处理单选逻辑
    const payload = labelInValue ? { value, label } : value;
    setValue(payload);
    isFunction(onChange, payload, record);
    setOpen(false);
  };

  return (
    <Table
      size="small"
      loading={loading}
      columns={columns}
      pagination={false}
      rowKey={fieldValue}
      scroll={{ x: 'max-content', y: 250 }}
      dataSource={dataIndexTrue ? dataSource : []}
      rowClassName={(record) => rowClassName(record)}
      onRow={(record) => ({ onClick: () => onRow(record) })}
    />
  );
}
