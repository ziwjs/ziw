export interface DetailsProps {
  dataSource: { [key: string]: any };
  columns: {
    key: string;
    label: string;
    span?: number;
    render?: (value: any, record: any) => React.ReactNode;
  }[];
  gutter?: number;
}
