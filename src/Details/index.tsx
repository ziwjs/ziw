import React, { useEffect, useState } from 'react';
import { Descriptions } from 'antd';
import { isFunctionReturnArray } from '../utils';
import { DetailsProps } from '../types/Details';

const Index = (props: DetailsProps) => {
  const { columns, dataSource, gutter = 4, ...others } = props;

  const dataList = isFunctionReturnArray(columns) as DetailsProps['columns'];

  const [screenWidth, setScreenWidth] = useState(0);

  // 监听屏幕宽度变化
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.onresize = () => setScreenWidth(window.innerWidth);
  }, []);

  return (
    <Descriptions {...others} column={screenWidth < 992 ? 1 : gutter}>
      {dataList.map(({ label, key, span = 1, render, ...others }) => {
        return (
          <Descriptions.Item
            key={key}
            label={label}
            span={screenWidth < 992 ? 1 : span}
            {...others}
          >
            {
              /* 兼容 render 函数调用 */
              typeof render === 'function'
                ? render(dataSource[key], dataSource)
                : dataSource[key] || ' '
            }
          </Descriptions.Item>
        );
      })}
    </Descriptions>
  );
};

export default Index;
