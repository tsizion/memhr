import React, { useState, useContext } from "react";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../Context/LanguageContext"; // Import the context

// Import logos for each language
import logoEn from "../assets/Logo/MEMHR ENG.png";
import logoAm from "../assets/Logo/memherlogo-removebg-preview.png";
import logoTi from "../assets/Logo/memherlogo-removebg-preview.png";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { language } = useLanguage(); // Get the current language from context

  // Translations for the mobile menu (same as desktop)
  const translations = {
    en: {
      courses: "Courses",
      ebooks: "E-Books",
      about: "About",
      adult: "Adult",
      kid: "Kid",
      signIn: "Sign In",
      searchPlaceholder: "Search....",
    },
    am: {
      courses: "ኮርሶች",
      ebooks: "ኢ-መጽሓፍ",
      about: "ስለእኛ",
      adult: "ለአዋቂ",
      kid: "ለልጅ",
      signIn: "ግባ",
      searchPlaceholder: "ፈልግ....",
    },
    ti: {
      courses: "ኮርሳት",
      ebooks: "ኢ-መጽሓፍ",
      about: "ብዛዕባና ዝምልከት",
      adult: "ንዓቢ ሰብ",
      kid: "ህፃውንቲ",
      signIn: "ግባ",
      searchPlaceholder: "ፈልግ....",
    },
  };

  // Logo mapping for each language
  const logos = {
    en: logoEn,
    am: logoAm,
    ti: logoTi,
  };

  // Default language fallback to 'en' if language is undefined or invalid
  const currentLanguage = translations[language] ? language : "en";
  const t = translations[currentLanguage];
  const logo = logos[currentLanguage]; // Get the correct logo based on the language

  return (
    <div
      className={`fixed top-0 left-0 h-full w-2/3 bg-[#1a1a1a] text-white transform transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex items-center">
        <img
          src={logo} // Dynamically change logo based on the language
          alt="Logo"
          className="h-20 w-40 object-contain" // Consistent logo size in menu
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
          placeholder={t.searchPlaceholder}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col space-y-4 mt-4 px-4">
        <li>
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-500 transition"
          >
            {t.courses}
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-500 transition"
          >
            {t.ebooks}
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-500 transition"
          >
            {t.about}
          </Link>
        </li>

        {/* Dropdown for Adult/Kid */}
        <li className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center text-gray-700 hover:text-blue-500 transition"
          >
            {t.adult} <AiOutlineDown className="ml-1" />
          </button>
          {isDropdownOpen && (
            <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-full">
              <li>
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-500 transition"
                >
                  {t.kid}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-500 transition"
                >
                  {t.adult}
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Sign In Button */}
        <li>
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-500 transition"
          >
            <button className="w-[100px] bg-primary px-3 py-2 rounded-[5px] text-white hover:bg-primary-light">
              {t.signIn}
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
