import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Col, Form, Row } from 'antd';
import { ButtonGroup } from '../index';
import { asyncAwaitForms, _setFormValue } from './utils';
import { caseType, layoutCase, sortColumns } from './item';
import { isFunction, isFunctionReturnArray } from '../utils';
import type { Ref } from 'react';
import type { FormItemProps } from 'antd/lib/form';
import type { FormProProps, Column } from '../types/FormPro';
import type { ButtonGroupProps } from '../types/ButtonGroup';
import { DownOutlined, UpOutlined, ReloadOutlined, ZoomInOutlined } from '@ant-design/icons';
import styles from './index.less';

const Index = forwardRef((props: FormProProps, ref?: Ref<any>) => {
  const {
    onReset,
    onSubmit,
    columns = [],
    type = 'form',
    displayPre = 0,
    layout = 'vertical',
    ...others
  } = props;

  const [form] = Form.useForm();

  const [expand, setExpand] = useState(false);

  const _columns: Column[] = sortColumns(isFunctionReturnArray(columns));

  useImperativeHandle(
    ref,
    () => ({
      ...(ref?.current || {}),
      getFormValue: async () => await asyncAwaitForms(ref?.current),
      setFormValue: (target = {}) => _setFormValue(ref?.current, target),
    }),
    [ref],
  );

  const search = async () => {
    const formData = form.getFieldsValue();
    const validate = await form.validateFields();
    if (Array.isArray(validate.errorFields)) return;
    isFunction(onSubmit, formData);
  };

  const reset = () => {
    form.resetFields();
    const formData = form.getFieldsValue();
    isFunction(onReset, formData);
  };

  const colItemLayout = (index: number, num: number) => {
    const showNum =
      typeof displayPre === 'number' && displayPre > 0 && displayPre <= index && !expand;
    const getColNum = (maxNum: number) => (showNum ? 0 : maxNum);
    return {
      xl: getColNum(num),
      lg: getColNum(8),
      md: getColNum(12),
      sm: getColNum(24),
      xs: getColNum(24),
    };
  };

  const buttonGroup: ButtonGroupProps = {
    splitSize: 6,
    button: [
      {
        label: '提交',
        type: 'primary',
        onClick: search,
        htmlType: 'submit',
        icon: <ZoomInOutlined />,
      },
      { label: '重置', onClick: reset, icon: <ReloadOutlined /> },
      {
        type: 'text',
        label: expand ? '收起' : '展开',
        onClick: () => setExpand(!expand),
        icon: expand ? <UpOutlined /> : <DownOutlined />,
      },
    ],
  };

  const searchItem = () => {
    const showExpand = displayPre > _columns.length;
    if (showExpand) buttonGroup.button?.pop();
    return (
      <Col key="query" {...colItemLayout(-1, 6)} className={styles.rightCol}>
        <Form.Item label=" ">
          <ButtonGroup {...buttonGroup} />
        </Form.Item>
      </Col>
    );
  };

  const getFields = () => {
    return [
      ..._columns.map((column, index) => {
        let {
          key,
          help,
          rules,
          span = 6,
          type: _type,
          label = ' ',
          hasFeedback,
          validateStatus,
          ...rest
        } = column;
        const payload: FormItemProps = { label, rules, help, hasFeedback, validateStatus };
        if (_type === 'TextArea') span = 24;
        // 解决控制 [antd: Switch] `value` is not a valid prop, do you mean `checked`
        if (_type === 'Switch') payload.valuePropName = 'checked';
        return (
          <Col key={key} className={styles.leftCol} {...colItemLayout(index, span)}>
            <Form.Item {...payload} name={key}>
              {caseType(_type, rest)}
            </Form.Item>
          </Col>
        );
      }),
      ...(type === 'searchForm' ? [searchItem()] : []),
    ];
  };

  const formProps = {
    form,
    labelWrap: true,
    ...others,
    ref,
    layout: layoutCase[layout] ?? 'vertical',
  };

  return (
    <Form {...formProps}>
      <Row gutter={24} className={styles.rowBox}>
        {getFields()}
      </Row>
    </Form>
  );
});

export default Index;
