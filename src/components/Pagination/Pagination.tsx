import React from "react";
import { PaginationProps } from "../../types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  rowsPerPage,
  totalRows,
  onChangePage,
  onChangeRowsPerPage,
}) => {
  return (
    <tfoot className="bg-white">
      <tr>
        <td colSpan={4} className="py-2 px-5 text-sm text-gray-700">
          <div className="flex justify-end items-center gap-10">
            <div className="flex items-center">
              <span>Rows per page: </span>
              <select
                value={rowsPerPage}
                onChange={onChangeRowsPerPage}
                className="ml-2 p-1 border border-gray-300 rounded-md"
                aria-label="Select number of rows per page" // Provides context for screen readers
              >
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
              </select>
            </div>
            <div>
              {`${(currentPage - 1) * rowsPerPage + 1} - ${
                Math.min(currentPage * rowsPerPage, totalRows)
              } of ${totalRows}`}
            </div>
            <div className="flex items-center">
              <button
                onClick={() => onChangePage(currentPage - 1)}
                disabled={currentPage === 1}
                className="ml-2 p-1 border border-gray-300 rounded-md"
                aria-label="Previous page" // Provides context for screen readers
                aria-disabled={currentPage === 1} // Indicates the button is disabled
              >
                &lt;
              </button>
              <button
                onClick={() => onChangePage(currentPage + 1)}
                disabled={currentPage * rowsPerPage >= totalRows}
                className="ml-2 p-1 border border-gray-300 rounded-md"
                aria-label="Next page" // Provides context for screen readers
                aria-disabled={currentPage * rowsPerPage >= totalRows} // Indicates the button is disabled
              >
                &gt;
              </button>
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  );
};

export default Pagination;
