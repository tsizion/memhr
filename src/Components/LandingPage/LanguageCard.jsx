import React from "react";
import { useLanguage } from "../../Context/LanguageContext";

// Language mapping for display vs. actual language code
const languages = [
  { label: "English", code: "en" },
  { label: "አማርኛ", code: "am" },
  { label: "ትግርኛ", code: "ti" },
];

// Reusable LanguageCircle component
const LanguageCircle = ({ label, code }) => {
  const { changeLanguage } = useLanguage(); // Access language context

  return (
    <div
      onClick={() => changeLanguage(code)} // Sends code (en, am, ti)
      className="flex justify-center items-center cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105"
    >
      {/* Outer Circle */}
      <div className="bg-transparent border border-primary-orange rounded-full flex justify-center items-center sm:w-16 sm:h-16 xsm:w-14 xsm:h-14 md:w-28 md:h-28">
        {/* Inner Circle */}
        <div className="bg-[#ffe8d057] xsm:w-10 xsm:h-10 sm:w-12 sm:h-12 md:w-24 md:h-24 rounded-full flex justify-center items-center text-gray-700 font-bold md:text-lg sm:text-[10px] xsm:text-[8px]">
          {label}
        </div>
      </div>
    </div>
  );
};

// Language Circles Container
const LanguageCirclesContainer = () => {
  return (
    <div className="flex flex-col md:flex-row xsm:flex-col gap-4 w-max px-2">
      {languages.map(({ label, code }) => (
        <LanguageCircle key={code} label={label} code={code} />
      ))}
    </div>
  );
};

export default LanguageCirclesContainer;
