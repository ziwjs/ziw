---
title: FormPro
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

## FormPro

高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。

## 何时使用

用于创建一个实体或收集信息。  
需要对输入的数据类型进行校验时。

## 基本用法

基本的表单数据域控制展示，包含布局、初始化、验证、提交。

```tsx
import React, { Fragment, useRef, useState } from 'react';
import { FormPro, ButtonGroup } from 'ziw';
export default () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({});

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
  ];

  const cascaderOptions = [
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
        },
      ],
    },
  ];

  const selectTablecolumns = [
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
    <Fragment>
      <FormPro
        ref={formRef}
        initialValues={{ Input: '111' }}
        columns={[
          { key: 'Input', label: 'Input', placeholder: 'placeholder' },
          {
            key: 'SelectTable',
            label: 'SelectTable',
            type: 'SelectTable',
            options,
            allowClear: true,
            placeholder: 'SelectTable',
            columns: selectTablecolumns,
          },
          { key: 'InputNumber', label: 'InputNumber', type: 'InputNumber' },
          {
            key: 'Select',
            label: 'Select',
            type: 'Select',
            options,
            allowClear: true,
            rules: [{ required: true, message: 'Please Select your Select!' }],
          },
          { key: 'Cascader', label: 'Cascader', type: 'Cascader', options: cascaderOptions },
          { key: 'TimePicker', label: 'TimePicker', type: 'TimePicker' },
          { key: 'DatePicker', label: 'DatePicker', type: 'DatePicker' },
          { key: 'RangePicker', label: 'RangePicker', type: 'RangePicker' },
          { key: 'CheckboxGroup', label: 'CheckboxGroup', type: 'CheckboxGroup', options },
          { key: 'RadioGroup', label: 'RadioGroup', type: 'RadioGroup', options },
          { key: 'Rate', label: 'Rate', type: 'Rate' },
          { key: 'Switch', label: 'Switch', type: 'Switch' },
          { key: 'Slider', label: 'Slider', type: 'Slider' },
          { key: 'TextArea', label: 'TextArea', type: 'TextArea' },
        ]}
      />
      <ButtonGroup
        button={[
          {
            label: '提交表单',
            type: 'primary',
            onClick: async () => {
              /*
                通过使用 getFormValue() api 获取表单值
                当然，你也可以通过使用 antd Form 提供的 api 获取
              */
              const data = await formRef.current.getFormValue();
              if (!data) return;
              setFormData(data);
            },
          },
          {
            label: '修改表单',
            onClick: () =>
              /*
                通过使用 setFieldsValue() api 修改表单值
                当然，你也可以通过使用 antd Form 提供的 api 修改
              */
              formRef.current.setFormValue({
                InputNumber: 2,
                Select: 'Apple',
                Switch: true,
                Rate: 5,
              }),
          },
          {
            label: '重置表单',
            onClick: () => {
              setFormData({});
              formRef.current.resetFields();
            },
          },
        ]}
      />
      {JSON.stringify(formData) !== '{}' && (
        <div style={{ marginTop: 24 }}>{JSON.stringify(formData)}</div>
      )}
    </Fragment>
  );
};
```

## 表单布局

表单有两种布局。

```tsx
import React, { Fragment, useState } from 'react';
import { FormPro, ButtonGroup } from 'ziw';
export default () => {
  const [formLayout, setFormLayout] = useState('vertical');
  return (
    <Fragment>
      <ButtonGroup
        button={[
          { label: 'vertical', onClick: () => setFormLayout('vertical') },
          { label: 'horizontal', type: 'primary', onClick: () => setFormLayout('horizontal') },
        ]}
      />
      <FormPro
        layout={formLayout}
        style={{ marginTop: 24 }}
        columns={[
          { key: 'InputA', label: 'Field A', placeholder: 'placeholder', span: 12 },
          { key: 'InputB', label: 'Field B', placeholder: 'placeholder', span: 12 },
        ]}
      />
    </Fragment>
  );
};
```

## 表单尺寸

设置表单组件尺寸，仅对 自带 type 组件有效。

```tsx
import React, { Fragment, useState } from 'react';
import { FormPro, ButtonGroup } from 'ziw';
export default () => {
  const [componentSize, setComponentSize] = useState('middle');
  return (
    <Fragment>
      <ButtonGroup
        button={[
          { label: 'small', onClick: () => setComponentSize('small') },
          { label: 'middle', type: 'primary', onClick: () => setComponentSize('middle') },
          { label: 'large', type: 'large', onClick: () => setComponentSize('large') },
        ]}
      />
      <FormPro
        size={componentSize}
        style={{ marginTop: 24 }}
        columns={[
          { key: 'Input', label: 'Input', placeholder: 'placeholder' },
          { key: 'TimePicker', label: 'TimePicker', type: 'TimePicker' },
          { key: 'DatePicker', label: 'DatePicker', type: 'DatePicker' },
          { key: 'Select', label: 'Select', type: 'Select', options: [] },
        ]}
      />
    </Fragment>
  );
};
```

## 表单禁用

设置表单组件禁用，仅对 自带 type 组件有效。

```tsx
import React from 'react';
import { FormPro } from 'ziw';
export default () => {
  return (
    <FormPro
      columns={[
        { key: 'Input', label: 'Input', placeholder: 'placeholder', disabled: true },
        { key: 'TimePicker', label: 'TimePicker', type: 'TimePicker', disabled: true },
        { key: 'DatePicker', label: 'DatePicker', type: 'DatePicker', disabled: true },
        { key: 'Select', label: 'Select', type: 'Select', options: [], disabled: true },
      ]}
    />
  );
};
```

## 自定义校验

我们提供了 validateStatus help hasFeedback 等属性，你可以不通过 FormPro 自己定义校验的时机和内容。  
validateStatus: 校验状态，可选 `success`, `warning`, `error`, `validating`。  
hasFeedback：用于给输入框添加反馈图标。 help：设置校验文案。

```tsx
import React from 'react';
import { FormPro, ButtonGroup } from 'ziw';
export default () => {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
  ];

  const cascaderOptions = [
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
        },
      ],
    },
  ];

  const selectTablecolumns = [
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
    <FormPro
      columns={[
        {
          key: 'Input',
          label: 'Input',
          placeholder: 'placeholder',
          validateStatus: 'error',
          help: 'error',
        },
        {
          key: 'SelectTable',
          label: 'SelectTable',
          type: 'SelectTable',
          options,
          allowClear: true,
          placeholder: 'SelectTable',
          columns: selectTablecolumns,
          validateStatus: 'warning',
        },
        {
          key: 'Select',
          label: 'Select',
          type: 'Select',
          options,
          allowClear: true,
          rules: [{ required: true, message: 'Please Select your Select!' }],
          hasFeedback: true,
          validateStatus: 'success',
        },
        {
          key: 'Cascader',
          label: 'Cascader',
          type: 'Cascader',
          options: cascaderOptions,
          hasFeedback: true,
          validateStatus: 'warning',
        },
        {
          key: 'TimePicker',
          label: 'TimePicker',
          type: 'TimePicker',
          hasFeedback: true,
          validateStatus: 'error',
        },
        {
          key: 'DatePicker',
          label: 'DatePicker',
          type: 'DatePicker',
          hasFeedback: true,
          validateStatus: 'validating',
        },
      ]}
    />
  );
};
```

## 动态校验规则

根据不同情况执行不同的校验规则。

```tsx
import React, { Fragment, useRef, useState } from 'react';
import { FormPro, ButtonGroup } from 'ziw';
export default () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({});

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
  ];

  const selectTablecolumns = [
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
    <Fragment>
      <FormPro
        ref={formRef}
        columns={[
          {
            key: 'Input A',
            label: 'Input A',
            rules: [
              {
                required: true,
                len: 3,
                message: '请输入 3 位字符',
              },
            ],
          },
          {
            key: 'Input B',
            label: 'Input B',
            rules: [
              {
                required: true,
                max: 5,
                message: '最多 5 位字符',
              },
            ],
          },
          {
            key: 'Input C',
            label: 'Input C',
            rules: [
              {
                required: true,
                min: 2,
                message: '最少 2 位字符',
              },
            ],
          },
          {
            key: 'Input D',
            label: 'Input D',
            rules: [
              {
                required: true,
                pattern:
                  /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
                message: '手机号码输入不规范',
              },
            ],
          },
          {
            options,
            allowClear: true,
            key: 'SelectTable',
            type: 'SelectTable',
            label: 'SelectTable',
            placeholder: 'SelectTable',
            columns: selectTablecolumns,
            rules: [
              {
                required: true,
                validator: (rule, value) => {
                  if (!value) return Promise.reject(new Error('请选择～'));
                  return Promise.resolve();
                },
              },
            ],
          },
        ]}
      />
      <ButtonGroup
        button={[
          {
            label: '提交表单',
            type: 'primary',
            onClick: async () => {
              const data = await formRef.current.getFormValue();
              if (!data) return;
              setFormData(data);
            },
          },
          {
            label: '重置表单',
            onClick: () => {
              setFormData({});
              formRef.current.resetFields();
            },
          },
        ]}
      />
      {JSON.stringify(formData) !== '{}' && (
        <div style={{ marginTop: 24 }}>{JSON.stringify(formData)}</div>
      )}
    </Fragment>
  );
};
```

## 高级搜索

🛎️ 3 分钟实现查询表单！  
四列栅格式的表单排列方式，常用于数据表格的高级搜索

```tsx
import React, { Fragment, useState } from 'react';
import { FormPro } from 'ziw';
export default () => {
  const [formData, setFormData] = useState({});
  return (
    <Fragment>
      <FormPro
        type="searchForm"
        displayPre={3}
        onSubmit={(data) => setFormData(data)}
        onReset={(data) => setFormData({})}
        columns={[
          { key: 'Input A', label: 'Input A', placeholder: 'placeholder' },
          { key: 'Input B', label: 'Input B', placeholder: 'placeholder' },
          { key: 'Input C', label: 'Input C', placeholder: 'placeholder' },
          { key: 'Input D', label: 'Input D', placeholder: 'placeholder' },
          { key: 'Input E', label: 'Input E', placeholder: 'placeholder' },
          { key: 'Input F', label: 'Input F', placeholder: 'placeholder' },
        ]}
      />
      {JSON.stringify(formData) !== '{}' && <div>{JSON.stringify(formData)}</div>}
    </Fragment>
  );
};
```

## 排序

通过 order 属性，可以控制表单的排序。  
值越小，越靠前。

```tsx
import React from 'react';
import { FormPro } from 'ziw';
export default () => {
  return (
    <FormPro
      type="searchForm"
      displayPre={3}
      columns={[
        { key: 'Input A', label: 'Input A', placeholder: 'placeholder', order: 3 },
        { key: 'Input B', label: 'Input B', placeholder: 'placeholder', order: 2 },
        { key: 'Input C', label: 'Input C', placeholder: 'placeholder' },
        { key: 'Input D', label: 'Input D', placeholder: 'placeholder', order: 2 },
        { key: 'Input E', label: 'Input E', placeholder: 'placeholder', order: 1 },
        { key: 'Input F', label: 'Input F', placeholder: 'placeholder' },
      ]}
    />
  );
};
```

## API

| 属性名 | 类型 | 是否必须 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| columns | Column | 否 | [] | 表单项配置数组 |
| type | string | 否 | `form` | 表单类型，可选值有：`form`、`searchForm` |
| displayPre | number | 否 | 0 | 展示表单项数量，默认为 0，即全部展示 |
| onReset | function | 否 | - | 表单重置的回调函数,`type = searchForm` 生效 |
| onSubmit | function | 否 | - | 表单提交的回调函数,`type = searchForm` 生效 |
| layout | string | 否 | `vertical` | 表单布局，可选值有：`vertical`、`horizontal` |
| 其他属性 | 参见 [Antd Form](https://ant.design/components/form-cn#api) 组件参数 | - | - | 所有其他属性都会传递给 `Form` 组件。 |

### Column

| 属性名 | 类型 | 是否必须 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| key | string | 是 | - | 表单项的唯一标识 |
| label | string | 否 | - | 表单项的标签文本 |
| type | string | 否 | `Input` | 表单项的类型，可选值有：`Type` |
| order | number | 否 | - | 值越小排列越靠前 |
| 其他属性 | 参见 [Antd Form](https://ant.design/components/form-cn#formitem) 组件参数 | - | - | 所有其他属性都会传递给 `Form.Item` 组件。 |

### Type

`'Input' | 'Select' | 'Switch' | 'Slider' | 'Cascader' | 'RadioGroup' | 'Rate' | 'TextArea' | 'CheckboxGroup' | 'TimePicker' | 'DatePicker' | 'RangePicker' | 'InputNumber' | 'SelectTable'`

### 表单方法

| 方法名 | 描述 |
| --- | --- |
| getFormValue() | 异步获取表单数据，返回一个 Promise 对象 |
| setFormValue(object) | 设置表单数据的值，参数为一个对象 |
| 其他方法 | 参见 [Antd Form](https://ant.design/components/form-cn#forminstance) FormInstance 参数 |
