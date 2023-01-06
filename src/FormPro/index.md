---
title: FormPro
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

## FormPro

## 基本用法

基本的表单数据域控制展示，包含布局、初始化、验证、提交。

```tsx
import React, { Fragment, useRef, useState } from 'react';
import { FormPro, ButtonGroupPro } from 'ziw';
export default () => {
  const [formData, setFormData] = useState({});

  const formRef = useRef();

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

  return (
    <Fragment>
      <FormPro
        ref={formRef}
        initialValues={{ Input: '111' }}
        columns={[
          { key: 'TextArea', label: 'TextArea', type: 'TextArea' },
          { key: 'Input', label: 'Input', placeholder: 'placeholder' },
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
          { key: 'Slider', label: 'Slider', type: 'Slider' },
          { key: 'RangePicker', label: 'RangePicker', type: 'RangePicker', span: 12 },
          { key: 'CheckboxGroup', label: 'CheckboxGroup', type: 'CheckboxGroup', options },
          { key: 'RadioGroup', label: 'RadioGroup', type: 'RadioGroup', options },
          { key: 'Switch', label: 'Switch', type: 'Switch' },
          { key: 'Rate', label: 'Rate', type: 'Rate' },
        ]}
      />
      <div style={{ margin: '24px 0' }}>
        <ButtonGroupPro
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
      </div>

      {JSON.stringify(formData) !== '{}' && <div>{JSON.stringify(formData)}</div>}
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

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
  ];

  return (
    <Fragment>
      <FormPro
        type="searchForm"
        displayPre={3}
        initialValues={{ Input: '111' }}
        onSubmit={(data) => setFormData(data)}
        onReset={(data) => setFormData({})}
        columns={[
          { key: 'TextArea', label: 'TextArea', type: 'TextArea', span: 12 },
          { key: 'Input', label: 'Input', placeholder: 'placeholder', order: 1 },
          { key: 'InputNumber', label: 'InputNumber', type: 'InputNumber' },
          {
            key: 'Select',
            label: 'Select',
            type: 'Select',
            options,
            allowClear: true,
            rules: [{ required: true, message: 'Please Select your Select!' }],
          },
        ]}
      />
      {JSON.stringify(formData) !== '{}' && <div>{JSON.stringify(formData)}</div>}
    </Fragment>
  );
};
```

## API

| 参数          | 说明                                     | 类型                   | 默认值 |
| ------------- | ---------------------------------------- | ---------------------- | ------ |
| type          | 设置表单类型                             | `searchForm` \| `form` | `form` |
| columns       | 表格列的配置描述，具体项见下表           | `ColumnsType[]`        | -      |
| displayPre    | 只显示前面部分查询条件                   | `number`               | -      |
| initialValues | 表单默认值，只有初始化以及重置时生效     | `object`               | -      |
| onSubmit      | 仅在 `type = searchForm` 时生效 查询事件 | `function(data)`       | -      |
| onReset       | 仅在 `type = searchForm` 时生效 重置事件 | `function()`           | -      |

## Column

列描述数据对象，是 columns 中的一项，Column 使用相同的 API。

| 参数  | 说明                                      | 类型            | 默认值 |
| ----- | ----------------------------------------- | --------------- | ------ |
| type  | 设置控件类型                              | string          | Input  |
| key   | 设置了唯一的 key                          | string          | -      |
| label | `label` 标签的文本                        | `ColumnsType[]` | -      |
| span  | 栅格占位格数，为 0 时相当于 display: none | number          | 6      |
| order | 元素的排列顺序. 数值越小，排列越靠前      | number          | 0      |
| rules | 校验规则，设置字段的校验逻辑              | Rule[]          | -      |
