import React from "react";
import { useLanguage } from "../../Context/LanguageContext";

const Welcome = () => {
  const { language } = useLanguage(); // Access the current language from the context

  // Translation object for different languages
  const translations = {
    en: {
      welcome: "Welcome",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et.",
      teacher: "Teacher",
    },
    am: {
      welcome: "እንኳን ደህና መጡ",
      description: "ሎረም ኢፕሶም ዶር ሲታ ሶርት ማት ይበልኝ",
      teacher: "መምህር",
    },
    ti: {
      welcome: "እንኳን ደህና መጡ",
      description: "በርሶ አንካ ምስላት በተመነት ማለት ቢዝኮማ አልተለዋዋጭ ተግባራት",
      teacher: "መምህር",
    },
  };

  return (
    <div className="flex flex-col w-[88%]">
      <h1 className="text-black">{translations[language].welcome}</h1>
      <div className="h-auto rounded-2xl bg-primary w-full my-5 px-4 py-4">
        <h3 className="mb-1 text-lg xsm:text-[10px] font-body ">
          {translations[language].teacher}
        </h3>
        <p className="xsm:text-[8px] sm:text-[10px] md:text-sm leading-relaxed">
          {translations[language].description}
        </p>
      </div>
    </div>
  );
};

export default Welcome;
