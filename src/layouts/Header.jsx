import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineDown, AiOutlineGlobal } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`bg-[#f7f7f7] container text-sm font-title sticky top-0 z-20 w-full flex flex-row items-center justify-between px-6 py-3 ${
        isScrolled ? "shadow-sm" : ""
      } transition-shadow`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-20 w-auto object-contain" // Fixed size for all screens
        />
      </div>

      {/* Navigation, Search, and Hamburger Menu */}
      <div className="flex items-center">
        {/* Search Bar (visible on larger screens, responsive width) */}
        {!isMenuOpen && (
          <div className="hidden md:flex items-center relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
            <FaSearch className="absolute left-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="mx-3 sm:w-56 md:w-44 lg:w-96 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition-width"
            />
          </div>
        )}

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 ml-6">
          <Link
            to="/Courses"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Courses
          </Link>
          <Link
            to="/Playlists"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Playlists
          </Link>
          <Link
            to="/About"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            About
          </Link>

          {/* Dropdown for Adult */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center text-gray-700 hover:text-blue-500 transition">
              Adult <AiOutlineDown className="ml-1 w-6" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-40 z-10">
                <Link
                  to="/Kid"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-500 transition"
                >
                  Kid
                </Link>
                <Link
                  to="/Adult"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-500 transition"
                >
                  Adult
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/SignIn"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            <AiOutlineGlobal className="text-[18px]" />
          </Link>
          <Link
            to="/SignIn"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            <button className="bg-primary px-3 py-2 rounded-[5px] text-white hover:bg-primary-light">
              SignIn
            </button>
          </Link>
        </nav>

        {/* Hamburger Menu Toggle (visible on smaller screens) */}
        <div className="md:hidden cursor-pointer ml-4" onClick={toggleMenu}>
          <AiOutlineMenu size={24} />
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
