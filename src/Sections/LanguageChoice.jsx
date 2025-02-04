import React from "react";

// Reusable LanguageCard component
const LanguageCard = ({ index, language }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-2xl p-6 w-72 sm:w-80 h-48 sm:h-56 flex flex-col items-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      {/* Outer Circle (Stationary) */}
      <div className="absolute -top-10 sm:-top-12 bg-transparent border-2 border-primary w-24 sm:w-32 h-24 sm:h-32 rounded-full flex justify-center items-center">
        {/* Inner Circle Content with Swinging Effect */}
        <div className="bg-primary-light w-16 sm:w-24 h-16 sm:h-24 rounded-full flex justify-center items-center text-white font-bold animate-swing text-xs sm:text-sm font-title">
          {language}
        </div>
      </div>

      {/* Card content */}
      <div className="mt-12 sm:mt-16 text-center">
        <h3 className="text-base sm:text-lg font-title font-semibold">
          {language}
        </h3>
        <p className="text-xs sm:text-sm font-title text-gray-500">
          Choose this language
        </p>
      </div>
    </div>
  );
};

// Using the LanguageCard component 3 times
const LanguageCardsContainer = () => {
  return (
    <div className="flex  justify-center n gap-4">
      <LanguageCard index={0} language="English" />
      <LanguageCard index={1} language="አማርኛ" />
      <LanguageCard index={2} language="ትግርኛ" />
    </div>
  );
};

export default LanguageCardsContainer;
