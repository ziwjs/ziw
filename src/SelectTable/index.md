---
title: SelectTable
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

## SelectTable

## 基本用法

弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。

```tsx
import React from 'react';
import { SelectTable } from 'ziw';
export default () => {
  const columns = [
    {
      title: '编号',
      dataIndex: 'value',
      align: 'center',
    },
    {
      title: '名字',
      dataIndex: 'label',
      align: 'center',
    },
  ];
  const style = {
    margin: '10px',
    flex: '1 1 200px',
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <SelectTable
        value={32}
        columns={columns}
        options={[
          {
            label: 'John',
            value: 32,
          },
          {
            label: 'Jim',
            value: 42,
            disabled: true,
          },
          {
            label: 'Joe',
            value: 33,
          },
        ]}
        style={style}
      />
      <SelectTable disabled columns={columns} options={[]} style={style} />
      <SelectTable loading columns={columns} options={[]} style={style} />
      <SelectTable
        allowClear
        columns={columns}
        options={[
          {
            label: 'Joe',
            value: 33,
          },
        ]}
        style={style}
      />
    </div>
  );
};
```

## 多选

多选，从已有条目中选择

```tsx
import React from 'react';
import { SelectTable } from 'ziw';
export default () => {
  const columns = [
    {
      title: '编号',
      dataIndex: 'value',
      align: 'center',
    },
    {
      title: '名字',
      dataIndex: 'label',
      align: 'center',
    },
  ];
  return (
    <SelectTable
      mode="multiple"
      value={[42]}
      columns={columns}
      style={{ width: 300 }}
      options={[
        {
          label: 'John',
          value: 32,
        },
        {
          label: 'Jim',
          value: 42,
          disabled: true,
        },
        {
          label: 'Joe',
          value: 33,
        },
      ]}
    />
  );
};
```
