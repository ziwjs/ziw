import React, { useState, useEffect, SyntheticEvent, FC } from 'react';
import { Table } from 'antd';
import { Resizable, ResizeCallbackData } from 'react-resizable';
import type { ArgTableProps } from '../types/ArgTable';
import './style.css';

interface ResizeableTitleProps extends ResizeCallbackData {
  index: number;
  width: number;
  onResize: (event: SyntheticEvent, data: ResizeCallbackData) => void;
}

const ResizeableTitle: FC<ResizeableTitleProps> = ({
  width = 100,
  onResize,
  index,
  ...restProps
}) => {
  return (
    <Resizable
      width={width}
      height={0}
      onResize={onResize}
      draggableOpts={{ axis: 'x' }}
      minConstraints={[100, 100]}
    >
      <th {...restProps} />
    </Resizable>
  );
};

const ArgTable = <T extends object>({
  dataSource = [],
  columns = [],
  ...restProps
}: ArgTableProps<T>) => {
  const [dcolumns, setDcolumns] = useState(columns);

  useEffect(() => {
    setDcolumns(columns);
  }, [columns]);

  const components = { header: { cell: ResizeableTitle } };

  const handleResize =
    (index: number) =>
    (_: SyntheticEvent, { size }: ResizeCallbackData) => {
      const nextColumns = [...dcolumns];
      nextColumns[index] = { ...nextColumns[index], width: size.width };
      setDcolumns(nextColumns);
    };

  const _columns: any = dcolumns.map((col, index) => ({
    ...col,
    onHeaderCell: () => ({
      width: col.width || 100,
      onResize: handleResize(index),
    }),
  }));

  return (
    <Table columns={_columns} components={components} dataSource={dataSource} {...restProps} />
  );
};

export default ArgTable;
