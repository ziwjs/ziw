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
  return (
    <Fragment>
      <FormPro
        ref={formRef}
        dataSource={[
          { key: 'Input', label: 'Input' },
          { key: 'InputNumber', label: 'InputNumber', type: 'InputNumber' },
          {
            key: 'Select',
            label: 'Select',
            type: 'Select',
            options: [{ label: 'Apple', value: 'Apple' }],
          },
          {
            key: 'Cascader',
            label: 'Cascader',
            type: 'Cascader',
            options: [
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
            ],
          },
          { key: 'TimePicker', label: 'TimePicker', type: 'TimePicker' },
          { key: 'TextArea', label: 'TextArea', type: 'TextArea' },
          { key: 'DatePicker', label: 'DatePicker', type: 'DatePicker' },
          { key: 'RangePicker', label: 'RangePicker', type: 'RangePicker' },
          { key: 'Checkbox', label: 'Checkbox', type: 'Checkbox' },
          {
            key: 'CheckboxGroup',
            label: 'CheckboxGroup',
            type: 'CheckboxGroup',
            options: [
              { label: 'Apple', value: 'Apple' },
              { label: 'Pear', value: 'Pear' },
            ],
          },
          { key: 'Radio', label: 'Radio', type: 'Radio' },
          {
            key: 'RadioGroup',
            label: 'RadioGroup',
            type: 'RadioGroup',
            options: [
              { label: 'Apple', value: 'Apple' },
              { label: 'Pear', value: 'Pear' },
            ],
          },
          { key: 'Rate', label: 'Rate', type: 'Rate' },
          { key: 'Switch', label: 'Switch', type: 'Switch' },
        ]}
      />
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
            label: '重置表单',
            onClick: () => {
              formRef.current.resetFields();
              setFormData({});
            },
          },
        ]}
      />
      <div>{JSON.stringify(formData)}</div>
    </Fragment>
  );
};
```
