import type { SyntheticEvent } from 'react';
import type { TableProps, ColumnsType } from 'antd/lib/table';
import type { ResizeCallbackData } from 'react-resizable';

export type ColumnItem = ColumnsType<any>[number] & {
  minWidth?: number;
  maxWidth?: number;
};
export interface ArgTableProps<T extends object> extends TableProps<T> {
  dataSource?: T[];
  columns?: ColumnItem[];
}
export interface ResizeableTitleProps {
  index?: number;
  width?: string | number;
  onResize: (e: SyntheticEvent, data: ResizeCallbackData) => void;
}
