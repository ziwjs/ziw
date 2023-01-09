import React from 'react';
import { Descriptions } from 'antd';
// import './index.less';
export interface DetailsProps {
  /*
   */
  columns: {
    key: string;
    label: string;
    span?: number;
    render?: (value: any, record: any) => React.ReactNode;
    hide?: boolean;
  }[];
  dataSource: { [key: string]: any };
}
const Index = (props: DetailsProps) => {
  const { columns, dataSource, ...others } = props;
  return (
    <Descriptions bordered {...others} column={4}>
      {Array.isArray(columns) &&
        columns.map((item) => {
          const { key, label, span = 1, render, hide = false } = item;
          const style = hide ? { display: 'none' } : {};
          return (
            <Descriptions.Item key={key} label={label} span={span} style={{ ...style }}>
              {typeof render === 'function' ? render(dataSource[key], dataSource) : dataSource[key]}
            </Descriptions.Item>
          );
        })}
    </Descriptions>
  );
};

export default Index;
