---
title: ButtonGroupPro
nav:
  title: 组件
  path: /components
group:
  title: 通用
  order: 1
---

## ButtonGroupPro

## 基本用法

```tsx
import React from 'react';
import { ButtonGroupPro } from 'ziw';
export default () => (
  <ButtonGroupPro
    button={[
      { label: '按钮' },
      { label: '按钮', type: 'primary' },
      { label: '按钮', type: 'primary', danger: true },
      { label: '按钮', type: 'dashed' },
      { label: '按钮', disabled: true },
      { label: '按钮', loading: true },
    ]}
  />
);
```

## 设置间距大小

```tsx
import React from 'react';
import { ButtonGroupPro } from 'ziw';
export default () => (
  <ButtonGroupPro
    size={8}
    button={[
      { label: '按钮' },
      { label: '按钮', type: 'primary' },
      { label: '按钮', type: 'primary', danger: true },
      { label: '按钮', type: 'dashed' },
    ]}
  />
);
```

## 设置间距方向

```tsx
import React from 'react';
import { ButtonGroupPro } from 'ziw';
export default () => (
  <ButtonGroupPro
    direction="vertical"
    button={[
      { label: '按钮' },
      { label: '按钮', type: 'primary' },
      { label: '按钮', type: 'primary', danger: true },
      { label: '按钮', type: 'dashed' },
    ]}
  />
);
```

## 设置拆分

```tsx
import React from 'react';
import { ButtonGroupPro } from 'ziw';
export default () => (
  <ButtonGroupPro
    split={<div>|</div>}
    button={[
      { label: '按钮' },
      { label: '按钮', type: 'primary' },
      { label: '按钮', type: 'primary', danger: true },
    ]}
  />
);
```

## API

| 参数      | 说明                                 | 类型                       | 默认值     |
| --------- | ------------------------------------ | -------------------------- | ---------- |
| size      | 间距大小                             | `number`                   | 24         |
| split     | 设置拆分                             | `ReactNode`                |            |
| direction | 间距方向                             | `vertical` \| `horizontal` | horizontal |
| wrap      | 是否自动换行，仅在 horizontal 时有效 | `boolean`                  | true       |
| button    | 按钮组                               | `Array`                    |            |
