import React from "react";
import { FaArrowDown } from "react-icons/fa";

const TableHeader: React.FC = () => {
  return (
    <thead className="border-0">
      <tr className="border-b border-gray-300 rounded-xl">
        <th colSpan={4} className="px-6 py-4 text-lg font-semibold text-gray-700 text-left">
          <span id="table-header-surveys">Your Surveys</span>
        </th>
      </tr>
      <tr className="bg-gray-100 border-b border-gray-200">
        <th scope="col" className="py-3 text-sm text-left pl-5 font-medium text-gray-700" aria-label="Survey Status">
          Status
        </th>
        <th scope="col" className="py-3 pl-10 text-left text-sm font-medium text-gray-700" aria-label="Survey Title">
          Title
        </th>
        <th
          scope="col"
          className="py-3 pl-10 text-left text-sm font-medium text-gray-700 flex items-center gap-2"
          aria-label="Date Created"
        >
          Date Created
          <FaArrowDown className="text-gray-700" aria-hidden="true" />
        </th>
        <th scope="col" className="py-3 pl-10 text-left text-sm font-medium text-gray-700" aria-label="Hyperlink">
          Hyperlink
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
