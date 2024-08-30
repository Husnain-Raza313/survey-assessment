export interface Survey {
  status: string;
  title: string;
  dateCreated: string;
  hyperlink: string;
}

export interface TableRowProps {
  survey: Survey;
}

export interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

export interface TableRowProps {
  survey: Survey;
}

export interface PaginationProps {
  currentPage: number;
  rowsPerPage: number;
  totalRows: number;
  onChangePage: (newPage: number) => void;
  onChangeRowsPerPage: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface SearchBarProps {
  placeholder?: string;
}

export interface HyperlinkInputProps {
  hyperlink: string;
}

export interface StatusIndicatorProps {
  status: string;
}
