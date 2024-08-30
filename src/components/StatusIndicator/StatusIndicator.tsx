import React from "react";
import { getStatusStyles } from "../../helpers/helper";
import { StatusIndicatorProps } from "../../types";

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  return (
    <span
      className={`${getStatusStyles(status)} p-1 mb-2 rounded-xl`}
      aria-label={`Status: ${status}`}
    >
      <span className="text-7xl pb-1" aria-hidden="true">.</span>
      <span className="text-xs px-1 mr-1">{status}</span>
    </span>
  );
};

export default StatusIndicator;
