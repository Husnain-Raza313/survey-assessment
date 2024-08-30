import React from "react";
import { FaDownload } from "react-icons/fa";

const SurveyHeader: React.FC = () => {
  return (
    <div className="p-6 bg-white border-b border-gray-200 px-12">
      <h1 className="text-2xl font-semibold text-gray-700">Survey Dashboard</h1>
      <p className="text-sm text-gray-400 mt-3 mb-5">
        All your survey activity displayed in one convenient place
      </p>
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md flex items-center justify-between gap-2"
          aria-label="Export surveys"
        >
          <FaDownload aria-hidden="true" />
          EXPORT
        </button>
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          aria-label="Create a new survey"
        >
          + NEW SURVEY
        </button>
      </div>
    </div>
  );
};

export default SurveyHeader;
