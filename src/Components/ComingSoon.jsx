import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const ComingSoon = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8 text-center w-96">
          <h1 className="text-4xl font-bold mb-4 animate-pulse">Coming Soon</h1>
          <p className="text-lg text-gray-300 mb-6">
            Stay tuned for something amazing!
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-2xl hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl hover:text-blue-600 transition">
              <FaLinkedin />
            </a>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 px-4 py-2 bg-red-500 rounded text-white hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default ComingSoon;
