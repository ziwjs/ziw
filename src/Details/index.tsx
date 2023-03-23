import React, { useEffect, useState } from 'react';
import { Descriptions } from 'antd';
import { DetailsProps, Item } from '../types/Details';
import { isFunctionReturnArray, isFunction } from '../utils';

const Index = (props: DetailsProps) => {
  const { columns, dataSource, gutter = 4, ...others } = props;

  const dataList: DetailsProps['columns'] = isFunctionReturnArray(columns);

  // 屏幕宽度
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const handleResize = () => setScreenWidth(window.innerWidth);

  // 监听屏幕宽度变化
  useEffect(() => {
    // 监听 resize 事件
    window.addEventListener('resize', handleResize);
    return () => {
      // 移除监听
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 内容
  const content = (render: Item['render'], dataSource: any, key: string) => {
    if (typeof render === 'function') return render(dataSource[key], dataSource);
    return dataSource[key] || ' ';
  };

  return (
    <Descriptions {...others} column={screenWidth < 992 ? 1 : gutter}>
      {dataList.map(({ label = '', key = '', span = 1, render, ...others }) => {
        return (
          <Descriptions.Item
            {...others}
            key={key}
            label={isFunction(label)}
            span={screenWidth < 992 ? 1 : span}
          >
            {content(render, dataSource, key)}
          </Descriptions.Item>
        );
      })}
    </Descriptions>
  );
};

export default Index;
