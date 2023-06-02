import React, { FC, useCallback, SyntheticEvent, memo } from 'react';
import { Resizable } from 'react-resizable';
import type { ResizeableTitleProps } from '../types/ArgTable';

const ResizeableTitle: FC<ResizeableTitleProps> = memo(
  ({ index, width = 0, onResize, ...restProps }) => {
    const preventDefault = useCallback((event: SyntheticEvent) => {
      event.preventDefault();
      event.stopPropagation();
    }, []);
    if (typeof width === 'string' || !width) return <th {...restProps}></th>;
    return (
      <Resizable
        height={0}
        width={width}
        onResize={onResize}
        onResizeStart={preventDefault}
        minConstraints={[50, 50]}
        draggableOpts={{ enableUserSelectHack: false }}
        handle={<span onClick={preventDefault} className="react-resizable-handle" />}
      >
        <th {...restProps}></th>
      </Resizable>
    );
  },
);

export default ResizeableTitle;
