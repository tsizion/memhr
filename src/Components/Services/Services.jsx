import React, { useState } from "react";
import { courses, ebook, shop } from "../../assets/index";
import ComingSoon from "../ComingSoon"; // Import the ComingSoon component
import { useLanguage } from "../../Context/LanguageContext"; // Import the useLanguage hook

const ServiceCard = ({
  icon,
  title,
  description,
  buttonText,
  onGetStarted,
}) => {
  return (
    <div className="text-gray-800 bg-white border-[0.9px] border-primary px-6 py-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 font-title">{description}</p>
      <button
        onClick={onGetStarted}
        className="bg-primary-orange text-white text-sm px-4 py-2 rounded-md hover:bg-orange-600"
      >
        {buttonText}
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

  // Translations for Service Titles
  const serviceTitles = {
    en: {
      ebook: "Buy E-books",
      course: "Buy Courses",
      product: "Buy Products",
    },
    am: { ebook: "ኢ-መጽሐፍ ይግዙ", course: "ኮርስ ይግዙ", product: "ምርቶችን ይግዙ" },
    ti: { ebook: "ኢ-መጽሓፍ ግዝኡ", course: "ኮርስ ዕድጊ", product: "ፍርያት ምግዛእ" },
  };

  // Placeholder descriptions
  const serviceDescriptions = {
    en: {
      ebook: "Lorem ipsum dolor sit amet...",
      course: "Lorem ipsum dolor sit amet...",
      product: "Lorem ipsum dolor sit amet...",
    },
    am: {
      ebook: "ሎሬም ኢፕሰም ዶሎር ሲት አሜት...",
      course: "ሎሬም ኢፕሰም ዶሎር ሲት አሜት...",
      product: "ሎሬም ኢፕሰም ዶሎር ሲት አሜት...",
    },
    ti: {
      ebook: "ሎሬም ኢፕሰም ዶሎር ሲት አሜት...",
      course: "ሎሬም ኢፕሰም ዶሎር ሲት አሜት...",
      product: "ሎሬም ኢፕሰም ዶሎር ሲት አሜት...",
    },
  };

  // Translations for "Get Started" Button
  const getStartedTranslations = {
    en: "Get Started",
    am: "ጀምር",
    ti: "ጀምር",
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white">
      <h2 className="text-2xl font-bold mb-9 text-center font-title text-primary">
        {language === "en" && "What can you find on Memhr?"}
        {language === "am" && "መምህር ላይ ምን ማግኘት ይችላሉ?"}
        {language === "ti" && "ኣብ መምህር እንታይ ክትረኽቡ ትኽእሉ?"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto max-w-5xl">
        <ServiceCard
          icon={ebook}
          title={serviceTitles[language]?.ebook || serviceTitles["en"].ebook}
          description={
            serviceDescriptions[language]?.ebook ||
            serviceDescriptions["en"].ebook
          }
          buttonText={
            getStartedTranslations[language] || getStartedTranslations["en"]
          }
          onGetStarted={handleGetStartedClick}
        />
        <ServiceCard
          icon={courses}
          title={serviceTitles[language]?.course || serviceTitles["en"].course}
          description={
            serviceDescriptions[language]?.course ||
            serviceDescriptions["en"].course
          }
          buttonText={
            getStartedTranslations[language] || getStartedTranslations["en"]
          }
          onGetStarted={handleGetStartedClick}
        />
        <ServiceCard
          icon={shop}
          title={
            serviceTitles[language]?.product || serviceTitles["en"].product
          }
          description={
            serviceDescriptions[language]?.product ||
            serviceDescriptions["en"].product
          }
          buttonText={
            getStartedTranslations[language] || getStartedTranslations["en"]
          }
          onGetStarted={handleGetStartedClick}
        />
      </div>

      {/* Display ComingSoon modal if state is true */}
      {isComingSoonOpen && <ComingSoon onClose={handleCloseModal} />}
    </div>
  );
};

export default Services;
