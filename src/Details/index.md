---
title: Details
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

## Details

成组展示多个只读字段。

## 何时使用

常见于详情页的信息展示。

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
      info: '1996年，14岁的胡歌便成为上海教育电视台的小主持人。2005年在仙侠剧《仙剑奇侠传》中塑造了“李逍遥”一角，并演唱该剧插曲《六月的雨》《逍遥叹》 [2-3]  。2006年8月遭受严重车祸，2007年6月复出 [4]  。2009年主演仙侠剧《仙剑奇侠传三》 [5]  ，并演唱片尾曲《忘记时间》 [6]  。2010年主演的穿越剧《神话》在央视八套播出 [7]  。2011年参演历史题材电影《辛亥革命》提名大众电影百花奖“最佳新人奖” [8-9]  。2012年主演玄幻剧《轩辕剑之天之痕》 [10]  。2013年主演两部话剧，凭借《如梦之梦》获得北京丹尼国际舞台表演艺术奖“最佳男演员奖” [11]  。2014年参演战争剧《四十九日·祭》提名上海电视节白玉兰奖“最佳男配角奖” [12-13]  。2015年主演的谍战剧《伪装者》、古装剧《琅琊榜》、都市剧《大好时光》相继播出，获中国电视剧飞天奖“优秀男演员提名奖”、上海电视节白玉兰奖“最佳男主角奖”、中国电视金鹰奖“观众喜爱的男演员奖”、中国金鹰电视艺术节“最具人气男演员奖”等奖项 [14-18]     。2016年登上央视春晚演唱歌曲《相亲相爱》 [19-20]  。2017年二度登上央视春晚演唱歌曲《在此刻》，获得共青团中央“全国向上向善好青年”崇义友善好青年称号，2018年凭借《猎场》二度提名上海电视节白玉兰奖“最佳男主角奖',
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
        key: 'info',
        label: '信息',
        span: 4,
        render: (text) => text,
      },
    ]}
  />
);
```

## 带边框的

带边框和背景颜色列表。

```tsx
import React from 'react';
import { Details } from 'ziw';
export default () => (
  <Details
    bordered
    title="User Info"
    dataSource={{
      weight: '90',
      userName: 'Zhou Maomao',
      telephone: 1810000000,
      live: '	Hangzhou, Zhejiang',
      address: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    }}
    columns={[
      { key: 'weight', label: 'Weight' },
      { key: 'live', label: 'Live', span: 3 },
      { key: 'userName', label: 'UserName', span: 2 },
      { key: 'telephone', label: 'Telephone', span: 2 },
      { key: 'address', label: 'Address', span: 4 },
    ]}
  />
);
```

## 垂直

垂直的列表。

```tsx
import React, { Fragment } from 'react';
import { Details } from 'ziw';
export default () => (
  <Details
    layout="vertical"
    title="User Info"
    dataSource={{
      weight: '90',
      userName: 'Zhou Maomao',
      telephone: 1810000000,
      live: '	Hangzhou, Zhejiang',
      address: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    }}
    columns={[
      { key: 'weight', label: 'Weight' },
      { key: 'live', label: 'Live', span: 3 },
      { key: 'userName', label: 'UserName', span: 2 },
      { key: 'telephone', label: 'Telephone', span: 2 },
      { key: 'address', label: 'Address', span: 4 },
    ]}
  />
);
```

## 垂直带边框的

垂直带边框和背景颜色的列表。

```tsx
import React, { Fragment } from 'react';
import { Details } from 'ziw';
export default () => (
  <Details
    bordered
    layout="vertical"
    title="User Info"
    dataSource={{
      weight: '90',
      userName: 'Zhou Maomao',
      telephone: 1810000000,
      live: '	Hangzhou, Zhejiang',
      bloodType: 'O型',
      occupation: '演员、歌手',
      address: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    }}
    columns={[
      { key: 'weight', label: '体重' },
      { key: 'live', label: '居住地' },
      { key: 'userName', label: '姓名' },
      { key: 'telephone', label: '手机号' },
      { key: 'bloodType', label: '血型' },
      { key: 'occupation', label: '职业', span: 3 },
      { key: 'address', label: '地址', span: 4 },
    ]}
  />
);
```

## 自定义尺寸

自定义尺寸，适应在各种容器中展示。

```tsx
import React, { Fragment, useState } from 'react';
import { Details, ButtonGroup } from 'ziw';
export default () => {
  const [size, setSize] = useState('default');
  return (
    <Fragment>
      <ButtonGroup
        button={[
          { label: 'default', onClick: () => setSize('default') },
          { label: 'middle', type: 'primary', onClick: () => setSize('middle') },
          { label: 'small', type: 'small', onClick: () => setSize('small') },
        ]}
      />
      <Details
        size={size}
        layout="vertical"
        title="User Info"
        style={{ margin: '24px 0' }}
        dataSource={{
          weight: '90',
          userName: 'Zhou Maomao',
          telephone: 1810000000,
          live: '	Hangzhou, Zhejiang',
          bloodType: 'O型',
          occupation: '演员、歌手',
          address: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
        }}
        columns={[
          { key: 'weight', label: '体重' },
          { key: 'live', label: '居住地' },
          { key: 'userName', label: '姓名' },
          { key: 'telephone', label: '手机号' },
          { key: 'bloodType', label: '血型' },
          { key: 'occupation', label: '职业', span: 3 },
          { key: 'address', label: '地址', span: 4 },
        ]}
      />
      <Details
        bordered
        size={size}
        layout="vertical"
        title="User Info"
        style={{ margin: '24px 0' }}
        dataSource={{
          weight: '90',
          userName: 'Zhou Maomao',
          telephone: 1810000000,
          live: '	Hangzhou, Zhejiang',
          bloodType: 'O型',
          occupation: '演员、歌手',
          address: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
        }}
        columns={[
          { key: 'weight', label: '体重' },
          { key: 'live', label: '居住地' },
          { key: 'userName', label: '姓名' },
          { key: 'telephone', label: '手机号' },
          { key: 'bloodType', label: '血型' },
          { key: 'occupation', label: '职业', span: 3 },
          { key: 'address', label: '地址', span: 4 },
        ]}
      />
    </Fragment>
  );
};
```

## API

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 表格列的配置项 | ColumnItem[] | [] |
| dataSource | 表格数据源 | Record<string, any> | {} |
| gutter | 列之间的间距，单位为像素 | number | 4 |
| 其他参数 | 参见 [Antd Descriptions](https://ant.design/components/descriptions-cn#descriptions) 组件参数 | - | - |

### ColumnItem

表格列的配置项，可以继承 Antd DescriptionsItemProps 接口，同时支持以下属性：

| 属性名 | 说明 | 类型 |
| --- | --- | --- |
| key | 列的唯一标识符 | string \| number |
| label | 列的标题，可以是字符串或者函数类型 | string \| (() => ReactNode) |
| render | 自定义渲染该列的单元格内容的方法，可以是函数或者组件类型 | (value: any, record: object) => ReactNode |
| 其他参数 | 参见 [Antd Descriptions](https://ant.design/components/descriptions-cn#descriptionitem) 组件参数 | - |
