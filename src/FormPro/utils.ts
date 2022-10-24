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
