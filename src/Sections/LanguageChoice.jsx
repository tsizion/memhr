import React from "react";
import { useNavigate } from "react-router-dom";

// Reusable LanguageCard component
const LanguageCard = ({ index, language, route }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)} // Navigate to the route on click
      className="relative bg-white shadow-lg rounded-2xl p-6 w-80 h-56 flex flex-col items-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer sm:w-64 sm:h-48 xsm:w-56 xsm:h-40 md:w-96 md:h-64"
    >
      {/* Outer Circle (Stationary) */}
      <div className="absolute -top-12 bg-transparent border-2 border-primary w-32 h-32 rounded-full flex justify-center items-center sm:w-28 sm:h-28 xsm:w-24 xsm:h-24 md:w-36 md:h-36">
        {/* Inner Circle Content with Swinging Effect */}
        <div className="bg-primary-light w-24 h-24 rounded-full flex justify-center items-center text-white font-bold animate-swing text-sm font-title sm:w-20 sm:h-20 sm:text-xs xsm:w-16 xsm:h-16 xsm:text-xs md:w-28 md:h-28 md:text-base">
          {language}
        </div>
      </div>

      {/* Card content */}
      <div className="mt-16 text-center sm:mt-12 xsm:mt-10 md:mt-20">
        <h3 className="text-lg font-title font-semibold sm:text-base xsm:text-sm md:text-xl">
          {language}
        </h3>
        <p className="text-sm font-title text-gray-500 sm:text-xs xsm:text-xs md:text-base">
          Choose this language
        </p>
      </div>
    </div>
  );
};

// Using the LanguageCard component 3 times
const LanguageCardsContainer = () => {
  return (
    <div className="flex justify-center gap-4 sm:gap-3 xsm:gap-2 md:gap-6">
      <LanguageCard index={0} language="English" route="/english" />
      <LanguageCard index={1} language="አማርኛ" route="/amharic" />
      <LanguageCard index={2} language="ትግርኛ" route="/tigrinya" />
    </div>
  );
};

export default LanguageCardsContainer;
