import type { ColumnType } from 'antd/lib/table';
import type { SelectProps, SelectValue, InternalSelectProps } from 'antd/lib/select';
export interface SelectTableProps extends SelectProps {
  columns: ColumnType<any>[];
}
export interface DropdownRenderProps {
  // 加载中状态
  loading?: boolean;
  // 数据源
  dataSource?: any[];
  // 选中的值
  value?: SelectValue;
  // 展开下拉菜单
  setOpen: Function;
  // 更新选中的值
  setValue: Function;
  // string 变为 { value: string, label: ReactNode } 的格式
  labelInValue?: boolean;
  // 选中的值发生变化时的回调
  onChange: SelectProps['onChange'];
  // 设置模式为多选或标签
  mode?: InternalSelectProps['mode'];
  // 自定义节点 label、value、options 的字段
  fieldNames?: SelectProps['fieldNames'];
  // 表格列配置
  columns: ColumnType<any>[];
}
