import { ReactNode } from 'react';
import type { DescriptionsProps } from 'antd';
import type { DescriptionsItemProps } from 'antd/lib/descriptions/Item';

export declare type Item = {
  key: string;
  render: (value: any, record: any) => ReactNode;
};
export interface DetailsProps extends DescriptionsProps {
  // 数据来源
  dataSource: any;
  // 列数
  gutter?: number;
  // 列配置
  columns: Array<DescriptionsItemProps & Item>;
}
