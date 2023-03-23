import type { Value } from '../../types/District';

// 获取下级执行函数
export const getChildren = (value: Value, type: string) => {
  switch (type) {
    case 'province':
      return citiesData(value);
    case 'city':
      return areasData(value);
    default:
      return [];
  }
};

// 去除市辖区
const citiesXiaQu = () => {
  // 获取市辖区数据
  const arr = cities.filter((item: any) => item.name === '市辖区');
  // 对比 provinces 中的 code， 将 市辖区 的 code 替换为省份的 code
  provinces.forEach((item: any) =>
    arr.forEach((item2: any) => item.code === item2.provinceCode && (item2.name = item.name)),
  );
  return arr;
};

// 省数据处理
export const provincesData = provinces.map((item: any) => {
  return {
    label: item.name,
    value: item.code,
    type: 'province',
    isLeaf: false,
  };
});

// 市数据处理
export const citiesData = (value: Value) => {
  return cities
    .filter((item: any) => item.provinceCode === value)
    .map((item: any) => {
      const target = citiesXiaQu().find((item2: any) => item2.code === item.code) || false;
      return {
        label: target ? target.name : item.name,
        value: item.code,
        type: 'city',
        isLeaf: false,
      };
    });
};

// 区数据处理
export const areasData = (value: Value) => {
  return areas
    .filter((item: any) => item.cityCode === value)
    .map((item: any) => {
      return {
        label: item.name,
        value: item.code,
        type: 'area',
        isLeaf: true,
      };
    });
};
