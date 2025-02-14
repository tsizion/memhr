import React from "react";
import { useNavigate } from "react-router-dom";

// Reusable LanguageCircle component
const LanguageCircle = ({ language, route }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="flex justify-center items-center cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105"
    >
      {/* Outer Circle */}
      <div className="bg-transparent border border-primary-orange rounded-full flex justify-center items-center sm:w-16 sm:h-16 xsm:w-14 xsm:h-14 md:w-28 md:h-28">
        {/* Inner Circle */}
        <div className="bg-[#ffe8d057] xsm:w-10 xsm:h-10 sm:w-12 sm:h-12 md:w-24 md:h-24 rounded-full flex justify-center items-center text-gray-700 font-bold md:text-lg sm:text-[10px] xsm:text-[8px]">
          {language}
        </div>
      </div>
    </div>
  );
};

// Language Circles Container
const LanguageCirclesContainer = () => {
  return (
    <div className="flex flex-col md:flex-row xsm:flex-col gap-4 w-max px-2">
      <LanguageCircle language="English" route="/english" />
      <LanguageCircle language="አማርኛ" route="/amharic" />
      <LanguageCircle language="ትግርኛ" route="/tigrinya" />
    </div>
  );
};

export default LanguageCirclesContainer;
