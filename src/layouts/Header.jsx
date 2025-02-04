import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { logo } from "../assets";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={` bg-[#f7f7f7]  text-sm font-title sticky top-0 z-20 w-full flex items-center px-[10rem] py-2  ${
        isScrolled ? "shadow-sm" : ""
      } transition-shadow`}
    >
      {/* Left Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-gray-700 hover:text-blue-500 transition">
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-500 transition"
        >
          About
        </Link>
        <Link
          to="/services"
          className="text-gray-700 hover:text-blue-500 transition"
        >
          Services
        </Link>
      </nav>

      <div className="flex-grow flex justify-center sm:justify-end md:justify-center md:w-auto md:order-none order-1">
        <div className="md:w-24 md:h-24 w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white overflow-hidden">
          <img src={logo} alt="Logo" className="object-cover" />
        </div>
      </div>

      {/* Right Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link
          to="/portfolio"
          className="text-gray-700 hover:text-blue-500 transition"
        >
          Portfolio
        </Link>
        <Link
          to="/blog"
          className="text-gray-700 hover:text-blue-500 transition"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-blue-500 transition"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? (
          <AiOutlineClose size={24} />
        ) : (
          <AiOutlineMenu size={24} />
        )}
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-gray-900 text-white transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-lg font-bold text-blue-400 ml-4">YourLogo</h1>
          <AiOutlineClose
            size={24}
            onClick={toggleMenu}
            className="cursor-pointer ml-auto"
          />
        </div>
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
              to="/about"
              onClick={toggleMenu}
              className="block hover:text-blue-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={toggleMenu}
              className="block hover:text-blue-400"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              onClick={toggleMenu}
              className="block hover:text-blue-400"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={toggleMenu}
              className="block hover:text-blue-400"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
