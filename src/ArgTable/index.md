---
title: ArgTable
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

## ArgTable

```tsx
import React from 'react';
import { ArgTable } from 'ziw';
export default () => (
  <ArgTable
    columns={[
      {
        title: 'Column 1',
        dataIndex: 'column1',
      },
      {
        title: 'Column 2',
        dataIndex: 'column2',
      },
      {
        title: 'Column 3',
        dataIndex: 'column3',
      },
    ]}
    dataSource={[
      {
        key: '1',
        column1: 'value1',
        column2: 'value2',
        column3: 'value3',
      },
      {
        key: '2',
        column1: 'value3',
        column2: 'value4',
      },
    ]}
    rowKey="key"
    scroll={{ x: '100%' }}
  />
);
```
