import React, { useState } from "react";
import { courses, ebook, shop } from "../../assets/index";
import ComingSoon from "../ComingSoon"; // Import the ComingSoon component
import { useLanguage } from "../../Context/LanguageContext"; // Import the useLanguage hook

const ServiceCard = ({ icon, title, description, onGetStarted }) => {
  return (
    <div className="text-gray-800 bg-white border-[0.9px] border-primary px-6 py-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 font-title">{description}</p>
      <button
        onClick={onGetStarted}
        className="bg-primary-orange text-white text-sm px-4 py-2 rounded-md hover:bg-orange-600"
      >
        Get Started
      </button>
    </div>
  );
};

const Services = () => {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const { language = "en" } = useLanguage(); // Ensure language is defined

  const handleGetStartedClick = () => {
    setIsComingSoonOpen(true); // Show the modal when "Get Started" is clicked
  };

  const handleCloseModal = () => {
    setIsComingSoonOpen(false); // Close the modal when the close button is clicked
  };

  // Ensure fallbacks for missing language keys
  const serviceTitles = {
    en: {
      ebook: "Buy E-books",
      course: "Buy Courses",
      product: "Buy Products",
    },
    am: {
      ebook: "ኢ-መጽሐፍ ይግዙ",
      course: "ኮርስ ይግዙ",
      product: "ምርቶችን ይግዙ",
    },
    ti: {
      ebook: "ኢ-መጽሓፍ ግዝኡ",
      course: "ኮርስ ዕድጊ",
      product: "ፍርያት ምግዛእ",
    },
  };

  const serviceDescriptions = {
    en: {
      ebook:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      course:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      product:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    am: {
      ebook:
        "ሎሬም ኢፕሰም ዶሎር ሲት አሜት፣ ኮንሰክተቱር አድፒሲንግ ኤሊት። ሴድ ዶ ኢዩዝሞድ ቴምፖር ኢንሲዲዱንት ኡት ላቦሬ ኤት ዶሎሬ ማግና አሊኩዋ።",
      course:
        "ሎሬም ኢፕሰም ዶሎር ሲት አሜት፣ ኮንሰክተቱር አድፒሲንግ ኤሊት። ሴድ ዶ ኢዩዝሞድ ቴምፖር ኢንሲዲዱንት ኡት ላቦሬ ኤት ዶሎሬ ማግና አሊኩዋ።",
      product:
        "ሎሬም ኢፕሰም ዶሎር ሲት አሜት፣ ኮንሰክተቱር አድፒሲንግ ኤሊት። ሴድ ዶ ኢዩዝሞድ ቴምፖር ኢንሲዲዱንት ኡት ላቦሬ ኤት ዶሎሬ ማግና አሊኩዋ።",
    },
    ti: {
      ebook:
        "ሎሬም ኢፕሰም ዶሎር ሲት አሜት፣ ኮንሰክተቱር አድፒሲንግ ኤሊት። ሴድ ዶ ኢዩዝሞድ ቴምፖር ኢንሲዲዱንት ኡት ላቦሬ ኤት ዶሎሬ ማግና አሊኩዋ።",
      course:
        "ሎሬም ኢፕሰም ዶሎር ሲት አሜት፣ ኮንሰክተቱር አድፒሲንግ ኤሊት። ሴድ ዶ ኢዩዝሞድ ቴምፖር ኢንሲዲዱንት ኡት ላቦሬ ኤት ዶሎሬ ማግና አሊኩዋ።",
      product:
        "ሎሬም ኢፕሰም ዶሎር ሲት አሜት፣ ኮንሰክተቱር አድፒሲንግ ኤሊት። ሴድ ዶ ኢዩዝሞድ ቴምፖር ኢንሲዲዱንት ኡት ላቦሬ ኤት ዶሎሬ ማግና አሊኩዋ።",
    },
  };

  // Safely access titles and descriptions for the current language
  const currentTitles = serviceTitles[language] || serviceTitles["en"];
  const currentDescriptions =
    serviceDescriptions[language] || serviceDescriptions["en"];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white">
      <h2 className="text-2xl font-bold mb-9 text-center font-title text-primary">
        {language === "en" && "What can you find on Memhr?"}
        {language === "am" && "መምህር ላይ ምን ማግኘት ይችላሉ?"}
        {language === "ti" && "ኣብ መመሄር እንታይ ክትረኽቡ ትኽእሉ?"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto max-w-5xl">
        <ServiceCard
          icon={ebook}
          title={currentTitles.ebook}
          description={currentDescriptions.ebook}
          onGetStarted={handleGetStartedClick}
        />
        <ServiceCard
          icon={courses}
          title={currentTitles.course}
          description={currentDescriptions.course}
          onGetStarted={handleGetStartedClick}
        />
        <ServiceCard
          icon={shop}
          title={currentTitles.product}
          description={currentDescriptions.product}
          onGetStarted={handleGetStartedClick}
        />
      </div>

      {/* Display ComingSoon modal if state is true */}
      {isComingSoonOpen && <ComingSoon onClose={handleCloseModal} />}
    </div>
  );
};

export default Services;
