//处理表单ref异步,获取表单的值
export const asyncAwaitForms = async (form) => {
  return (
    (form &&
      form.validateFields &&
      form
        .validateFields()
        .then(async (vals) => {
          return vals;
        })
        .catch(() => {
          return false;
        })) ||
    false
  );
};
// 设置表单数据的值
export const _setFormValue = (form, target) =>
  form && form.setFieldsValue && form.setFieldsValue({ ...target });
