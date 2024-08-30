import React from "react";
import TableCell from "../TableCell/TableCell";
import { TableRowProps } from "../../../types";
import HyperlinkInput from "../../HyperlinkInput/HyperlinkInput";
import StatusIndicator from "../../StatusIndicator/StatusIndicator";

const TableRow: React.FC<TableRowProps> = ({ survey }) => {
  return (
    <tr className="bg-white border-b border-gray-200">
      <TableCell className="px-10 pt-2 pb-5 text-sm text-gray-900">
        <StatusIndicator status={survey.status} />
      </TableCell>
      <TableCell className="pt-7 text-xs font-medium text-left text-gray-900" aria-label={`Title: ${survey.title}`}>
        {survey.title}
      </TableCell>
      <TableCell className="pt-7 text-xs font-medium text-gray-900" aria-label={`Date Created: ${survey.dateCreated}`}>
        {survey.dateCreated}
      </TableCell>
      <TableCell className="pl-5 pt-7 text-sm text-gray-900">
        <HyperlinkInput hyperlink={survey.hyperlink} />
      </TableCell>
    </tr>
  );
};

export default TableRow;
