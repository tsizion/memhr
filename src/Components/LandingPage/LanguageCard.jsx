import React from "react";
import { useNavigate } from "react-router-dom";

// Reusable LanguageCircle component
const LanguageCircle = ({ language, route }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="flex justify-center items-center cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 "
    >
      {/* Outer Circle */}
      <div className="bg-transparent border border-primary-orange w-48 h-48 rounded-full flex justify-center items-center sm:w-36 sm:h-36 xsm:w-28 xsm:h-28">
        {/* Inner Circle */}
        <div className="bg-[#ffe8d057] w-40 h-40 rounded-full flex justify-center items-center text-gray-700 font-bold text-lg sm:w-28 sm:h-28 xsm:w-20 xsm:h-20">
          {language}
        </div>
      </div>
    </div>
  );
};

// Language Circles Container
const LanguageCirclesContainer = () => {
  return (
    <div className="flex gap-4 w-max px-2">
      <LanguageCircle language="English" route="/english" />
      <LanguageCircle language="አማርኛ" route="/amharic" />
      <LanguageCircle language="ትግርኛ" route="/tigrinya" />
    </div>
  );
};

export default LanguageCirclesContainer;
