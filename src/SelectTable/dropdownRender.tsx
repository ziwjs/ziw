import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { DropdownRenderProps } from '../types/SelectTable';
import './style.less';

export default function DropdownRender(props: DropdownRenderProps) {
  const { value, columns, dataSource, setValue, setOpen, labelInValue, mode, fieldNames } = props;
  // columns 是否存在 fieldNames?.value fieldNames?.label
  const dataIndexTrue =
    columns.map((item: any) => item.dataIndex).includes(fieldNames?.value) &&
    columns.map((item: any) => item.dataIndex).includes(fieldNames?.label);

  // 多选存储选中的值
  let [selectedRowKeys, setSelectedRowKeys] = useState([]);

  return (
    <Table
      rowKey={String(fieldNames?.value)}
      size="small"
      columns={
        dataIndexTrue
          ? columns
          : columns.map((item: any) => {
              return { title: item?.title };
            })
      }
      pagination={false}
      className="tableBox"
      dataSource={dataSource}
      rowClassName={(record) => {
        //  添加选中样式
        const { [fieldNames?.value]: _value, disabled = false } = record;
        let styleStr = '';
        // 禁用样式
        if (disabled) styleStr += 'disabled ';
        // 选择模式 多选
        if (mode === 'multiple' || mode === 'tags') {
          selectedRowKeys.find((item) => item?.value === _value)
            ? (styleStr += 'ant-table-row-selected')
            : styleStr;
        } else {
          // 选择模式 单选
          _value && (value?.value || value) && _value === (value?.value || value)
            ? (styleStr += 'ant-table-row-selected')
            : styleStr;
        }
        console.log('styleStr', styleStr);
        return styleStr;
      }}
      onRow={(record) => {
        return {
          onClick: () => {
            const {
              [fieldNames?.value]: value,
              [fieldNames?.label]: label,
              disabled = false,
            } = record;
            // 禁用不可点击
            if (disabled) return;
            // 错误提示
            if (!dataIndexTrue)
              return console.error(
                'The fieldNames of the SelectTable component must contain the value and label fields',
              );
            // 选择模式 多选
            if (mode === 'multiple' || mode === 'tags') {
              let _selectedRowKeys = [...selectedRowKeys];
              // 未选中进行添加
              if (!_selectedRowKeys.find((item) => item?.value === value))
                _selectedRowKeys.push({ value, label });
              // 选中进行删除
              else _selectedRowKeys = _selectedRowKeys.filter((item) => item?.value !== value);
              // 更新选中的值
              setSelectedRowKeys(_selectedRowKeys);
              // 更新 value 的值
              setValue(
                labelInValue
                  ? _selectedRowKeys.map(({ value, label }) => ({ value, label }))
                  : _selectedRowKeys.map(({ value }) => value),
              );
              return;
            }

            // 选择模式 单选
            labelInValue ? setValue({ value, label }) : setValue(value);
            setOpen(false);
          },
        };
      }}
    />
  );
}
