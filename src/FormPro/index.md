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
          { key: 'Input', label: 'Input', placeholder: 'placeholder' },
          { key: 'InputNumber', label: 'InputNumber', type: 'InputNumber' },
          { key: 'Select', label: 'Select', type: 'Select', options, allowClear: true },
          { key: 'Cascader', label: 'Cascader', type: 'Cascader', options: cascaderOptions },
          { key: 'TimePicker', label: 'TimePicker', type: 'TimePicker' },
          { key: 'TextArea', label: 'TextArea', type: 'TextArea' },
          { key: 'DatePicker', label: 'DatePicker', type: 'DatePicker' },
          { key: 'RangePicker', label: 'RangePicker', type: 'RangePicker' },
          { key: 'CheckboxGroup', label: 'CheckboxGroup', type: 'CheckboxGroup', options },
          { key: 'RadioGroup', label: 'RadioGroup', type: 'RadioGroup', options },
          { key: 'Switch', label: 'Switch', type: 'Switch' },
          { key: 'Slider', label: 'Slider', type: 'Slider' },
          { key: 'Rate', label: 'Rate', type: 'Rate' },
        ]}
      />
      <div style={{ margin: '24px 0' }}>
        <ButtonGroupPro
          button={[
            {
              label: '获取表单',
              type: 'primary',
              onClick: async () => {
                /* 
              通过使用 getFormValue() api 获取表单值
              当然，你也可以通过使用 antd Form 提供的 api 获取
              */
                const data = await formRef.current.getFormValue();
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
                formRef.current.setFormValue({ InputNumber: 2, Select: 'Apple', Switch: true }),
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

## API

| 参数    | 说明                           | 类型                   | 默认值 |
| ------- | ------------------------------ | ---------------------- | ------ |
| type    | 设置表单类型                   | `searchForm` \| `form` | `form` |
| columns | 表格列的配置描述，具体项见下表 | `ColumnsType[]`        | -      |

## Column

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
