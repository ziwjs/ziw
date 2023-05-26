import type { TableProps, ColumnsType } from 'antd/lib/table';

export interface ArgTableProps<T extends object> extends TableProps<T> {
  dataSource?: T[];
  columns?: ColumnsType<T> & { onHeaderCell?: (column: ColumnsType<T>[number]) => any };
}
