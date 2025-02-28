import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { logo, logomemeher } from "../assets"; // Assuming logo is stored in your assets folder

const Footer = () => {
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
            <p className="text-sm">
              Empowering you with the tools you need to succeed in a digital
              world. Explore our services, portfolio, and blog for insights.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="text-sm space-y-2">
              <li>
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:info@example.com"
                  className="hover:text-blue-500 transition"
                >
                  info@example.com
                </a>
              </li>
              <li>
                <span className="font-bold">Phone:</span>{" "}
                <a
                  href="tel:+123456789"
                  className="hover:text-blue-500 transition"
                >
                  +123 456 789
                </a>
              </li>
              <li>
                <span className="font-bold">Address:</span> 123 Main Street,
                City, Country
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
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
