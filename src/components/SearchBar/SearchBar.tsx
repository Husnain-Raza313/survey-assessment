import React from "react";
import { FaSearch } from "react-icons/fa";
import { SearchBarProps } from "../../types";

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search..." }) => {
  return (
    <div
      className="flex items-center px-2 bg-white border border-gray-300 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      role="search"
    >
      <FaSearch className="text-gray-400 mr-2" aria-hidden="true" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full 2xl:w-[100%] max-w-md py-2 px-2 border-0 rounded-md focus:outline-none"
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;
