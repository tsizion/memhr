import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { logo, logomemeher } from "../assets"; // Assuming logo is stored in your assets folder
import { useLanguage } from "../Context/LanguageContext"; // Import the useLanguage hook

const Footer = () => {
  const { language = "en" } = useLanguage(); // Ensure language is defined

  const footerContent = {
    en: {
      aboutus:
        "Empowering you with the tools you need to succeed in a digital world. Explore our services, portfolio, and blog for insights.",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
      contactUs: "Contact Us",
      email: "Email:",
      phone: "Phone:",
      address: "Address:",
      socialMedia: "Social Media Links",
      copyright: "© Your Company. All rights reserved.",
    },
    am: {
      aboutus:
        "እርስዎን በዲጂታል ዓለም በማሳተም ስለማሻሻል መሣሪያዎች እንደምትጠቀሙ ተለመዱ። አገልግሎቶቻችንን፣ ፖርትፎልዮቻችንን፣ እና ብሎግ እንዲተመን ስለምትነበት።",
      quickLinks: "አሳሽ አማራጮች",
      home: "መነሻ",
      about: "ስለእኛ",
      services: "አገልግሎቶች",
      portfolio: "ፖርትፎልዮ",
      blog: "ብሎግ",
      contact: "እንግዶች",
      contactUs: "እንግዶች",
      email: "ኢሜይል:",
      phone: "ስልክ:",
      address: "አድራሻ:",
      socialMedia: "ማህበረሰብ መሳሪያዎች",
      copyright: "© እኛ ኩባንያ። በሁሉም መብት ተመስርቶች ነው።",
    },
    ti: {
      aboutus:
        "እባክህን ስለዚህ በዲጂታል ዓለም በማሳተም መሣሪያዎች እንደምትጠቀሙ ተለመዱ። አገልግሎቶቻችንን፣ ፖርትፎልዮቻችንን፣ እና ብሎግ ስለምትሰጥ።",
      quickLinks: "አሳሽ አማራጮች",
      home: "መነሻ",
      about: "ስለእኛ",
      services: "አገልግሎቶች",
      portfolio: "ፖርትፎልዮ",
      blog: "ብሎግ",
      contact: "እንግዶች",
      contactUs: "እንግዶች",
      email: "ኢሜይል:",
      phone: "ስልክ:",
      address: "አድራሻ:",
      socialMedia: "ማህበረሰብ መሳሪያዎች",
      copyright: "© በእኛ ኩባንያ። በሁሉም መብት ተመስርቶች ነው።",
    },
  };

  // Safely access footer content for the current language
  const currentContent = footerContent[language] || footerContent["en"];

  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 pb-6 mt-10 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
              <img
                src={logomemeher}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm">{currentContent.aboutus}</p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {currentContent.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  {currentContent.home}
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  {currentContent.about}
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  {currentContent.services}
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  {currentContent.portfolio}
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  {currentContent.blog}
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  {currentContent.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {currentContent.contactUs}
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <span className="font-bold">{currentContent.email}</span>{" "}
                <a
                  href="mailto:info@example.com"
                  className="hover:text-blue-500 transition"
                >
                  info@example.com
                </a>
              </li>
              <li>
                <span className="font-bold">{currentContent.phone}</span>{" "}
                <a
                  href="tel:+123456789"
                  className="hover:text-blue-500 transition"
                >
                  +123 456 789
                </a>
              </li>
              <li>
                <span className="font-bold">{currentContent.address}</span> 123
                Main Street, City, Country
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Copyright Info */}
          <p className="text-sm text-center mt-4 md:mt-0">
            {currentContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
