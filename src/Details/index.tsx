import React, { useEffect, useState, FC } from 'react';
import { Descriptions } from 'antd';
import { isFunctionReturnArray, isFunction } from '../utils';
import type { DetailsProps, ColumnItem } from '../types/Details';

declare type Type = 'label' | 'render';

const Details: FC<DetailsProps> = ({ columns = [], dataSource = {}, gutter = 4, ...others }) => {
  const dataList = isFunctionReturnArray(columns);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderContent = (item: ColumnItem, type: Type = 'label') => {
    const { key = '', label = '', render } = item;
    const labelContent = isFunction(label) ? label() : label;
    const renderContent = isFunction(render)
      ? render(dataSource[key], dataSource)
      : dataSource[key];
    return type === 'label' ? labelContent : renderContent;
  };

  return (
    <Descriptions {...others} column={screenWidth < 992 ? 1 : gutter}>
      {dataList.map((item: ColumnItem) => {
        const { key = '', span = 1, ...others } = item;
        return (
          <Descriptions.Item
            {...others}
            key={key}
            label={renderContent(item, 'label')}
            span={screenWidth < 992 ? 1 : span}
          >
            {renderContent(item, 'render')}
          </Descriptions.Item>
        );
      })}
    </Descriptions>
  );
};

export default Details;
