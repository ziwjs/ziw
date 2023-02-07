import React, { useState } from 'react';
import { Table } from 'antd';

interface DropdownRenderProps {
  value?: any;
  columns?: any;
  dataSource: any;
  originNode?: any;
  setValue: any;
  setOpen: any;
  labelInValue?: boolean;
  mode?: 'multiple' | 'tags' | undefined;
  fieldNames?: { label: string | undefined; value: string | number | undefined };
}
export default function DropdownRender(props: DropdownRenderProps) {
  const { value, columns, dataSource, setValue, setOpen, labelInValue, mode, fieldNames } = props;

  // 多选存储选中的值
  let [selectedRowKeys, setSelectedRowKeys] = useState([]);

  return (
    <Table
      rowKey={fieldNames?.value}
      size="small"
      columns={columns}
      pagination={false}
      className="tableBox"
      dataSource={dataSource}
      rowClassName={(record) => {
        //  添加选中样式
        const { [fieldNames?.value]: _value } = record;
        // 选择模式 多选
        if (mode === 'multiple' || mode === 'tags') {
          return selectedRowKeys.find((item) => item?.value === _value)
            ? 'ant-table-row-selected'
            : '';
        }
        // 选择模式 单选
        return _value && (value?.value || value) && _value === (value?.value || value)
          ? 'ant-table-row-selected'
          : '';
      }}
      onRow={(record) => {
        return {
          onClick: () => {
            // 选择模式 多选
            const { [fieldNames?.value]: value, [fieldNames?.label]: label } = record;
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
