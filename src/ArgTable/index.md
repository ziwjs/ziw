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
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Column 3',
        dataIndex: 'column3',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Column 5',
        dataIndex: 'column5',
        width: 300,
        ellipsis: true,
      },
      {
        title: 'Column 7',
        dataIndex: 'column7',
        width: 300,
        ellipsis: true,
      },
      {
        title: 'Column 8',
        dataIndex: 'column8',
        width: 300,
        ellipsis: true,
      },
      {
        title: 'Column 6',
        dataIndex: 'column6',
        ellipsis: true,
        width: 200,
        fixed: 'right',
      },
    ]}
    dataSource={[
      {
        key: '1',
        column1: 'value1',
        column2: 'value2',
        column3: 'value3',
        column4: 'value4',
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
