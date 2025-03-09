import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logo } from "../assets";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-2/3 bg-[#1a1a1a] text-white transform transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-20 w-auto object-contain" // Consistent logo size in menu
        />
        <AiOutlineClose
          size={24}
          onClick={toggleMenu}
          className="cursor-pointer ml-auto"
        />
      </div>

      {/* Search Bar */}
      <div className="px-4 py-2 relative">
        <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col space-y-4 mt-4 px-4">
        <li>
          <Link
            to="/"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
