import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <div className="p-6 bg-white border-b border-gray-200 w-full flex justify-end">
      <FaUserCircle
        className="text-blue-700"
        aria-label="User profile"
      />
    </div>
  );
};

export default Header;
