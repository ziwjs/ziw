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
        style={style}
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
      />
      <SelectTable disabled columns={columns} options={[]} style={style} />
      <SelectTable loading columns={columns} options={[]} style={style} />
      <SelectTable
        allowClear
        style={style}
        columns={columns}
        options={[{ label: 'Joe', value: 33 }]}
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

  const options = [
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
  ];

  const style = {
    margin: '10px',
    flex: '1 1 300px',
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 24,
      }}
    >
      <SelectTable
        allowClear
        value={[42]}
        style={style}
        mode="multiple"
        columns={columns}
        options={options}
      />
      <SelectTable
        disabled
        style={style}
        mode="multiple"
        value={[42, 33]}
        columns={columns}
        options={options}
      />
    </div>
  );
};
```

## 三种大小

三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。

```tsx
import React, { useState } from 'react';
import { ButtonGroup, SelectTable } from 'ziw';
export default () => {
  let [size, setSize] = useState('middle');
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
    flex: '1 1 300px',
  };
  return (
    <>
      <ButtonGroup
        button={[
          { label: 'small', onClick: () => setSize('small') },
          { label: 'middle', type: 'primary', onClick: () => setSize('middle') },
          { label: 'large', type: 'primary', onClick: () => setSize('large') },
        ]}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginTop: 24,
        }}
      >
        <SelectTable
          size={size}
          style={style}
          placeholder="单选"
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
        />
        <SelectTable
          size={size}
          style={style}
          mode="multiple"
          placeholder="多选"
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
        />
      </div>
    </>
  );
};
```
