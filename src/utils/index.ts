// 是否为函数并传入参数
export const isFunction = (fn: any, ...args: any) => typeof fn === 'function' && fn(...args);

//数组直接返回，函数执行后返回，其他返回空数组
export const isFunctionReturnArray = (target: any, ...args: any) => {
  if (Array.isArray(target)) return target;
  if (typeof target === 'function') return target(...args);
  return [];
};
