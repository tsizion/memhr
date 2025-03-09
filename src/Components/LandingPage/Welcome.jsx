import React from "react";
import { useLanguage } from "../../Context/LanguageContext";

const Welcome = () => {
  const { language } = useLanguage(); // Access the current language from the context

  // Translation object for different languages
  const translations = {
    en: {
      welcome: "Welcome",
      description: `Welcome to Memhr English Channel, your go-to place for learning, growth, and entertainment! 🚀

We create educational and engaging content to help you improve skills, career opportunities, and general knowledge while enjoying fun and inspiring videos.`,
      teacher: "",
    },
    am: {
      welcome: "እንኳን ደህና መጡ",
      description: `እንኳን ወደ መምህር የአማርኛ ቻናል በደህና መጡ  የመማር፣ የእድገት እና የመዝናኛ ቦታዎ! 🚀

በኢትዮጵያ እና በዲያስፖራው ለሚገኙ ኢትዮጵያውያን አዝናኝ እና መሳጭ ቪዲዮዎች እያጣጣሙ ክህሎትን፣ ሙያን እና ዕውቀትን ለማሻሻል የሚረዳ ከፍተኛ ጥራት ያለው የአማርኛ ይዘት እንፈጥራለን።
`,
      teacher: "",
    },
    ti: {
      welcome: "እንካዕ ብደሓን መጻኩም።",
      description: `🤗 እንካዕ ናብ መምህር ትግርኛ ቻነል መምሃሪ፣ ዕብየት፣ መዘናግዒ ቦታኹም ብደሓን መጻእኩም! 🚀 

ኣብ ኢትዮጵያን ዲያስፖራን ዝርከቡ ኢትዮጵያውያን ክእለቶም፣ ፍልጠቶም፣ ዓቕሞም ንምምሕያሽ ዝሕግዝ ልዑል ፅሬት ዘለዎ ትሕዝቶ ኣምሓርኛ ንፈጥር እንትኸውን ዘዘናግዑን መሳጢን ቪድዮታት እናቕረብና ኢና። 
`,
      teacher: "",
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
