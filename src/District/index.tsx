import React, { useEffect } from 'react';
import { Cascader } from 'antd';
import type { CascaderProps } from 'antd';
import { isFunction } from '../utils';
import type { OptionType, SelectedOptions } from '../types/District';
// import { provincesData, getChildren } from './utils';

const District = (props: CascaderProps<OptionType>) => {
  const { onChange, value, loadData, ...otherProps } = props;

  const [options, setOptions] = React.useState<OptionType[]>([]);
  const [val, setVal] = React.useState(value || []);

  const myOnChange = (value: string[], selectedOptions?: OptionType[]) => {
    setVal(value);
    isFunction(onChange, value, selectedOptions);
  };

  const myLoadData = (selectedOptions: SelectedOptions[]) => {
    const targetOption = selectedOptions?.[selectedOptions.length - 1];
    const { value = '', type = '' } = targetOption;
    targetOption.loading = true;
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = getChildren(value, type);
      setOptions([...options]);
    }, 1000);
    isFunction(loadData, selectedOptions);
  };

  useEffect(() => {
    // setOptions(provincesData);
  }, []);

  return (
    <Cascader
      {...otherProps}
      options={options}
      value={val}
      loadData={myLoadData}
      onChange={myOnChange}
    />
  );
};
export default District;
