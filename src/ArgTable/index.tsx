import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Table } from 'antd';
import type { ArgTableProps, ColumnItem } from '../types/ArgTable';
import type { ResizeCallbackData } from 'react-resizable';
import ResizeableTitle from './ResizeableTitle';
import { handleWidth } from './utils';
import './style.less';

const ArgTable = <T extends object>({
  dataSource = [],
  columns = [],
  ...restProps
}: ArgTableProps<T>) => {
  const devRef = useRef<HTMLDivElement>(null);
  const [dcolumns, setDcolumns] = useState([]);

  useEffect(() => {
    if (columns.length === 0) setDcolumns([]);
    else {
      const updatedColumns = columns.map((col) => {
        const width = handleWidth(col?.width || '0%');
        return { ...col, width: typeof width === 'number' ? (width >= 50 ? width : 50) : width };
      });

      const devWidth = devRef.current?.clientWidth || 0;
      const notPercentColumns = updatedColumns.filter((col) => typeof col.width === 'number');
      const percentWidth = notPercentColumns.reduce((acc, cur) => acc + (cur.width as number), 0);
      const percentColumns = updatedColumns.filter((col) => typeof col.width === 'string');
      const shouldSetPercentWidth =
        percentColumns.length && devWidth >= percentWidth + percentColumns.length * 80;

      const newColumns = updatedColumns.map((col) => {
        if (typeof col.width === 'string')
          return {
            ...col,
            width: shouldSetPercentWidth ? (devWidth - percentWidth) / percentColumns.length : 80,
          };
        return col;
      });
      setDcolumns(newColumns as any);
    }
  }, []);

  const handleResize = useCallback(
    (index: number) =>
      (_: any, { size }: ResizeCallbackData) => {
        const curWidth = size.width;
        const curMinWidth = dcolumns[index]?.minWidth ?? 50;
        const curMaxWidth = dcolumns[index]?.maxWidth ?? Infinity;
        if (curWidth < curMinWidth || curWidth > curMaxWidth) return;
        setDcolumns((oldColumns) => {
          const newColumns: any = [...oldColumns];
          newColumns[index] = { ...newColumns[index], width: curWidth };
          return newColumns;
        });
      },
    [dcolumns],
  );

  const _columns = useMemo(() => {
    return dcolumns.map((col: ColumnItem, index) => ({
      ...col,
      onHeaderCell: () => ({
        width: col.width,
        onResize: handleResize(index),
      }),
    }));
  }, [dcolumns, handleResize]);

  const components = useMemo(() => ({ header: { cell: ResizeableTitle } }), []);

  return (
    <div style={{ width: '100%' }} ref={devRef}>
      <Table
        {...restProps}
        columns={_columns}
        components={components}
        dataSource={dataSource}
        style={{ width: _columns.reduce((acc: number, cur: any) => acc + cur.width, 0) }}
      />
    </div>
  );
};

export default ArgTable;
