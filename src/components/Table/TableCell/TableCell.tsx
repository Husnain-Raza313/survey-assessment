import React from "react";
import { TableCellProps } from "../../../types";

const TableCell: React.FC<TableCellProps> = ({ children, className = "" }) => {
  return <td className={`px-10 ${className}`}>{children}</td>;
};

export default TableCell;
