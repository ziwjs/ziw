import type { ReactNode } from 'react';
import type { DescriptionsProps } from 'antd';
import type { DescriptionsItemProps } from 'antd/lib/descriptions/Item';

export type ColumnItem = DescriptionsItemProps & {
  key?: string | number;
  label?: string | (() => ReactNode);
  render?: (value: any, record: object) => ReactNode;
};

export type DetailsProps = Omit<DescriptionsProps, 'column'> & {
  gutter?: number;
  dataSource?: Record<string, any>;
  columns?: ColumnItem[];
};
