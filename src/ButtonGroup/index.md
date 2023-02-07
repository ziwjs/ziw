---
title: ButtonGroup
nav:
  title: 组件
  path: /components
group:
  title: 通用
  order: 1
---

## ButtonGroup

## 基本用法

```tsx
import React from 'react';
import { ButtonGroup } from 'ziw';
export default () => (
  <ButtonGroup button={[{ label: 'button 1' }, { label: 'button 2', type: 'primary' }]} />
);
```

## 按钮尺寸

按钮有大、中、小三种尺寸。  
通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中

```tsx
import React, { useState } from 'react';
import { ButtonGroup } from 'ziw';
export default () => {
  let [size, setSize] = useState('middle');
  return (
    <ButtonGroup
      size={size}
      button={[
        { label: 'small', onClick: () => setSize('small') },
        { label: 'middle', type: 'primary', onClick: () => setSize('middle') },
        { label: 'large', type: 'primary', onClick: () => setSize('large') },
        { label: 'button', type: 'primary', size: 'middle' },
      ]}
    />
  );
};
```

## 间距大小

间距预设大、中、小三种大小。  
通过设置 splitSize 为 large middle 分别把间距设为大、中间距。若不设置 splitSize，则间距为中。

```tsx
import React, { useState } from 'react';
import { ButtonGroup } from 'ziw';
export default () => {
  let [size, setSize] = useState('middle');
  return (
    <ButtonGroup
      splitSize={size}
      button={[
        { label: 'small', onClick: () => setSize('small') },
        { label: 'middle', type: 'primary', onClick: () => setSize('middle') },
        { label: 'large', type: 'primary', onClick: () => setSize('large') },
      ]}
    />
  );
};
```

## 按钮类型

按钮有五种类型

默认按钮：用于没有主次之分的一组行动点。

主按钮：用于主行动点，一个操作区域只能有一个主按钮。

虚线按钮：常用于添加操作。

文本按钮：用于最次级的行动点。

链接按钮：一般用于链接，即导航至某位置。

```tsx
import React from 'react';
import { ButtonGroup } from 'ziw';
export default () => (
  <ButtonGroup
    button={[
      { label: 'default' },
      { label: 'primary', type: 'primary' },
      { label: 'dashed', type: 'dashed' },
      { label: 'text', type: 'text' },
      { label: 'link', type: 'link' },
    ]}
  />
);
```

## 按钮状态

按钮有四种类型：以及四种状态属性与上面配合使用

危险：删除 / 移动 / 修改权限等危险操作，一般需要二次确认。

幽灵：用于背景色比较复杂的地方，常用在首页 / 产品页等展示场景。

禁用：行动点不可用的时候，一般需要文案解释。

加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

```tsx
import React from 'react';
import { ButtonGroup } from 'ziw';
export default () => (
  <ButtonGroup
    button={[
      { label: 'danger', type: 'primary', danger: true },
      { label: 'ghost', type: 'primary', ghost: true },
      { label: 'disabled', type: 'primary', disabled: true },
      { label: 'loading', type: 'primary', loading: true },
    ]}
  />
);
```

## 间距方向

相邻组件垂直。

```tsx
import React from 'react';
import { ButtonGroup } from 'ziw';
export default () => (
  <ButtonGroup
    direction="vertical"
    button={[
      { label: 'button 1' },
      { label: 'button 2', type: 'primary' },
      { label: 'button 3', type: 'primary', danger: true },
    ]}
  />
);
```

## 分隔符

相邻组件分隔符。

```tsx
import React from 'react';
import { ButtonGroup } from 'ziw';
export default () => (
  <ButtonGroup
    split={<div>|</div>}
    button={[
      { label: 'button 1' },
      { label: 'button 2', type: 'primary' },
      { label: 'button 3', type: 'primary', danger: true },
    ]}
  />
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| button | 按钮组 | `Array<ButtonProps & { label: string }>` |  |
| splitSize | 间距大小 | `large` \| `middle` \| `small` ｜ `number` | middle |
| split | 设置拆分 | `ReactNode` |  |
| direction | 间距方向 | `vertical` \| `horizontal` | horizontal |
| wrap | 是否自动换行，仅在 horizontal 时有效 | `boolean` | true |

### [ButtonProps](https://ant.design/components/button-cn#api)
