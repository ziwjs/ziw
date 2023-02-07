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

```tsx
import React from 'react';
import { SelectTable } from 'ziw';
export default () => {
  const columns = [
    {
      title: '编号',
      dataIndex: 'code',
      align: 'center',
    },
    {
      title: '名字',
      dataIndex: 'name',
      align: 'center',
    },
  ];
  const options = [
    {
      name: 'John',
      code: 32,
    },
    {
      name: 'Jim',
      code: 42,
    },
    {
      name: 'Joe',
      code: 33,
    },
  ];

  return (
    <SelectTable
      columns={columns}
      options={options}
      fieldNames={{ label: 'name', value: 'code' }}
    />
  );
};
```
