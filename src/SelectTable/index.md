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
        style={{ marginLeft: 10 }}
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

## 自定义节点

自定义节点 label、value 的字段

```tsx
import React from 'react';
import { SelectTable } from 'ziw';
export default () => {
  const columns = [
    {
      title: '编号',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: '名字',
      dataIndex: 'name',
      align: 'center',
    },
  ];

  const options = [
    { name: 'John', id: 32, age: 18 },
    { name: 'Jim', id: 42 },
    { name: 'Joe', id: 33 },
  ];

  const style = {
    margin: '10px',
    flex: '1 1 200px',
  };

  const props = {
    style,
    columns,
    options,
    allowClear: true,
    fieldNames: { label: 'name', value: 'id' },
    onChange: (value, option) => console.log('value --->', value, 'option --->', option),
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
      <SelectTable {...props} />
      <SelectTable {...props} labelInValue />
      <SelectTable {...props} mode="multiple" />
      <SelectTable {...props} mode="multiple" labelInValue />
    </div>
  );
};
```

## 响应式 maxTagCount

多选下通过响应式布局让选项自动收缩。该功能对性能有所消耗，不推荐在大表单场景下使用。

```tsx
import React from 'react';
import { SelectTable } from 'ziw';
export default () => {
  const columns = [
    {
      title: '编号',
      dataIndex: 'value',
      align: 'center',
      width: 100,
    },
    {
      title: '名字',
      dataIndex: 'label',
      align: 'center',
      width: 100,
    },
  ];

  const options = () => {
    const options = [];
    for (let i = 0; i < 30; i++) {
      const text = i + 1;
      options.push({
        label: text,
        value: text,
      });
    }
    return options;
  };

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
        style={style}
        mode="multiple"
        columns={columns}
        options={options}
        maxTagCount="responsive"
      />
      <SelectTable
        allowClear
        value={[1, 2, 3, 4]}
        style={style}
        mode="multiple"
        columns={columns}
        options={options}
        maxTagCount={2}
      />
    </div>
  );
};
```

## API

| 属性名 | 类型 | 默认值 | 描述 |
| --- | :-: | :-: | :-: |
| columns | Array | [] | 表格列的设置 |
| options | Array | [] | 表格数据源 |
| value | `SelectValue` | - | 选中项的值 |
| labelInValue | boolean | false | 是否以对象形式返回选中项 |
| fieldNames | object | {label: 'label', value: 'value'} | 显示字段名称 |
| loading | boolean | false | 是否加载中 |
| mode | string | - | 指定选择器模式，可选`multiple`, `tags` |
| placeholder | string | '请选择' | 未选择时的占位符 |
| onClear | function | - | 用户清空选项时的回调函数 |
| onChange | function | - | 选项变化时的回调函数 |
| onDeselect | function | - | 取消选中选项时的回调函数 |
| dropdownStyle | object | {} | 下拉列表样式 |
| onDropdownVisibleChange | function | - | 下拉列表显示/隐藏的回调函数 |
| 其他属性 | - | - | 参见 [Antd Select](https://ant.design/components/select-cn#select-props) 组件参数 |
