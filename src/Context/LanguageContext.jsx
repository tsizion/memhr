import React, { createContext, useState, useContext } from "react";
import i18n from "../Translations/il8n"; // Import i18n configuration

// Create Context
const LanguageContext = createContext();

// Custom Hook for easy access
export const useLanguage = () => useContext(LanguageContext);

// Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english"); // Default language

  // Function to change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang); // Update i18next language
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
