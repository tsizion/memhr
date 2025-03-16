import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineDown, AiOutlineGlobal } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../Context/LanguageContext";
import MobileMenu from "./MobileMenu";

// Import different logos
import memherEng from "../assets/Logo/MEMHR ENG.png";
import logo from "../assets/Logo/memherlogo-removebg-preview.png";
import logoTi from "../assets/Logo/memherlogo-removebg-preview.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { language } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Map language to corresponding logo
  const logoMap = {
    en: memherEng,
    am: logo,
    ti: logoTi,
  };

  const translations = {
    en: {
      courses: "Courses",
      ebooks: "E-Books",
      about: "About Us",
      adult: "Adult",
      kid: "Kid",
      signIn: "Sign In",
      joinSocial: "Join Our Social Media",
      searchPlaceholder: "Search....",
    },
    am: {
      courses: "ኮርሶች",
      ebooks: "ኢ-መጽሓፍ",
      about: "ስለእኛ",
      adult: "ለአዋቂ",
      kid: "ለልጅ",
      signIn: "ግባ",
      joinSocial: "ከማህበረሰባችን ሚዲያ ጋር ተያይዞ ይተላለፉ",
      searchPlaceholder: "ፈልግ....",
    },
    ti: {
      courses: "ኮርሳት",
      ebooks: "ኢ-መጽሓፍ",
      about: "ብዛዕባና ዝምልከት",
      adult: "ንዓቢ ሰብ",
      kid: "ህፃውንቲ",
      signIn: "እተ",
      joinSocial: "ከማህበረሰባችን ሚዲያ ጋር ተያይዞ ይተላለፉ",
      searchPlaceholder: "አልሽ....",
    },
  };

  return (
    <header
      className={`header text-sm font-title sticky top-0 z-20 w-full flex flex-row items-center justify-between py-3 transition-shadow`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logoMap[language]} // Select logo based on language
          alt="Logo"
          className="h-14 md:h-20 w-40 object-contain"
        />
      </div>

      {/* Navigation, Search, and Hamburger Menu */}
      <div className="flex items-center">
        {/* Search Bar (visible on larger screens) */}
        {!isMenuOpen && (
          <div className="hidden md:flex items-center relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
            <FaSearch className="absolute left-8 text-gray-500" />
            <input
              type="text"
              placeholder={translations[language].searchPlaceholder}
              className="mx-3 bg-white sm:w-56 md:w-44 lg:w-96 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary-dark transition-width"
            />
          </div>
        )}

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 ml-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500 transition">
            {translations[language].courses}
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-500 transition whitespace-nowrap hyphens-none"
          >
            {translations[language].ebooks}
          </Link>

          <Link to="/" className="text-gray-700 hover:text-blue-500 transition">
            {translations[language].about}
          </Link>

          {/* Dropdown for Adult */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center text-gray-700 hover:text-blue-500 transition">
              {translations[language].adult}{" "}
              <AiOutlineDown className="ml-1 w-6" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-40 z-10">
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-500 transition"
                >
                  {translations[language].kid}
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-500 transition"
                >
                  {translations[language].adult}
                </Link>
              </div>
            )}
          </div>

          {/* Sign In Button */}
          <Link to="/" className="text-gray-700 hover:text-blue-500 transition">
            <button className="w-[100px] bg-primary px-3 py-2 rounded-[5px] text-white hover:bg-primary-light">
              {translations[language].signIn}
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
