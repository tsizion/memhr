import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { logo } from "../assets";

const ComingSoon = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
      <div className="bg-white border-[0.5px] border-gray-400 text-gray-800 rounded-lg shadow-lg p-8 text-center w-96 max-w-md">
        {/* Logo - Centered */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="w-40" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 animate-pulse font-title">
          Coming Soon
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-500 mb-6 font-title">
          Stay tuned for something amazing!
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-2xl hover:text-primary transition">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl hover:text-primary transition">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-primary transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl hover:text-primary transition">
            <FaLinkedin />
          </a>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 rounded text-white hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
