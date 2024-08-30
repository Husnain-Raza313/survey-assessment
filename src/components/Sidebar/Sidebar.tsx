import React from "react";
import {
  FaHome,
  FaChartBar,
  FaTasks,
  FaCog,
  FaQuestionCircle,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-50 p-6" aria-label="Sidebar Navigation">
      <div className="flex items-center justify-start mb-9">
        <img src="01_Instagram.png" alt="Logo" className="w-12 h-12" />
      </div>
      <SearchBar placeholder="Search..." />
      <p className="text-xs text-gray-500 py-5">MENU</p>
      <nav>
        <ul>
          <li className="mb-9">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-500 text-sm"
              aria-label="Homepage"
            >
              <FaHome className="mr-3 text-sm" />
              Homepage
            </a>
          </li>
          <li className="mb-9">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-500 text-sm"
              aria-label="Course Analytics"
            >
              <FaChartBar className="mr-3" />
              Course Analytics
            </a>
          </li>
          <li className="mb-9">
            <Link
              to="/"
              className="flex items-center text-blue-500 text-sm"
              aria-current="page"
              aria-label="Survey Library"
            >
              <FaTasks className="mr-3" />
              Survey Library
            </Link>
          </li>
          <li className="mb-9">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-500 text-sm"
              aria-label="My Tasks"
            >
              <FaTasks className="mr-3" />
              My Tasks
            </a>
          </li>
        </ul>
      </nav>
      <hr className="p-5" />
      <div>
        <p className="text-xs text-gray-500 py-5">GENERAL</p>
        <ul>
          <li className="mb-9">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-500 text-sm"
              aria-label="Settings"
            >
              <FaCog className="mr-3" />
              Settings
            </a>
          </li>
          <li className="mb-9">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-500 text-sm"
              aria-label="Support"
            >
              <FaQuestionCircle className="mr-3" />
              Support
            </a>
          </li>
          <li className="mb-9">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-500 text-sm"
              aria-label="Account"
            >
              <FaUserCircle className="mr-3" />
              Account
            </a>
          </li>
          <li className="mb-9">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-500 text-sm"
              aria-label="Logout"
            >
              <FaSignOutAlt className="mr-3" />
              Logout
            </a>
          </li>
        </ul>
      </div>
      <hr className="p-5" />
      <div>
        <div className="flex items-center">
          <FaUserCircle className="mr-2" aria-label="User Profile Icon" />
          <div className="text-xs">
            <p className="text-gray-700" aria-label="User Name">
              Professor Jonathan Williams
            </p>
            <p className="text-gray-500" aria-label="User Email">
              williamsj@duke.edu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
