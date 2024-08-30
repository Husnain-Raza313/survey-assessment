import React, { useState } from "react";
import { surveys } from "../../helpers/data";
import Pagination from "../Pagination/Pagination";
import TableRow from "./TableRow/TableRow";
import TableHeader from "./TableHeader/TableHeader";

const Table: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const paginatedSurveys = surveys.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="py-4">
      <div className="border-2 border-gray-200 rounded-xl h-[70%] overflow-y-auto">
        <table
          className="min-w-full bg-white border-0 rounded-xl table-auto border-gray-200"
          aria-live="polite"
        >
          <caption className="sr-only">Survey Table: displays a list of surveys with their status, title, creation date, and hyperlink.</caption>
          <TableHeader />
          <tbody>
            {paginatedSurveys.length > 0 ? (
              paginatedSurveys.map((survey, index) => (
                <TableRow key={index} survey={survey} />
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-3 text-center text-gray-500">
                  No surveys available
                </td>
              </tr>
            )}
          </tbody>
          <Pagination
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          totalRows={surveys.length}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </table>
      </div>
    </div>
  );
};

export default Table;
