---
title: Details
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

## Details

## 基本用法

```tsx
import React from 'react';
import { Details } from 'ziw';
export default () => (
  <Details
    title="User Info"
    dataSource={{
      name: '胡歌',
      age: 18,
      height: '185 cm',
      weight: '70 kg',
      bloodType: 'O型',
      occupation: '演员、歌手',
      nationality: '中国',
      img: 'https://img2.baidu.com/it/u=3537724616,3322910760&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1083',
    }}
    columns={[
      { key: 'name', label: '名字' },
      { key: 'age', label: '年纪' },
      { key: 'height', label: '身高' },
      { key: 'weight', label: '体重' },
      { key: 'bloodType', label: '血型' },
      { key: 'nationality', label: '国籍' },
      { key: 'occupation', label: '职业', span: 2 },
      {
        key: 'img',
        label: '图片',
        span: 4,
        render: (text) => <img src={text} style={{ width: 150, height: 150 }} />,
      },
    ]}
  />
);
```

## API

| 参数       | 说明             | 类型       | 默认值 |
| ---------- | ---------------- | ---------- | ------ |
| dataSource | 数据对象         | `object`   |        |
| columns    | 表格列的配置描述 | `object[]` |        |
| bordered   | 是否展示边框     | `boolean`  | false  |
