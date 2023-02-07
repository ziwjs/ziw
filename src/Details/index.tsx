import React, { useEffect, useState } from 'react';
import { Descriptions } from 'antd';
export interface DetailsProps {
  dataSource: { [key: string]: any };
  columns: {
    key: string;
    label: string;
    span?: number;
    render?: (value: any, record: any) => React.ReactNode;
  }[];
  bordered?: boolean;
  column?: number;
}
const Index = (props: DetailsProps) => {
  const { columns, dataSource, column = 4, bordered = false, ...others } = props;

  const [screenWidth, setScreenWidth] = useState(0);

  // 监听屏幕宽度变化
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.onresize = () => setScreenWidth(window.innerWidth);
  }, []);

  return (
    <Descriptions {...others} column={screenWidth < 992 ? 1 : column}>
      {Array.isArray(columns) &&
        columns.map((item, _index) => {
          const { key, label, span = 1, render } = item;
          return (
            <Descriptions.Item key={key} label={label} span={screenWidth < 992 ? 1 : span}>
              {
                /* 兼容 render 函数调用 */
                typeof render === 'function' ? render(dataSource[key], dataSource) : dataSource[key]
              }
            </Descriptions.Item>
          );
        })}
    </Descriptions>
  );
};

export default Index;
