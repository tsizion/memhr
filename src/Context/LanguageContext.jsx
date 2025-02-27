import React, { createContext, useState, useContext } from "react";

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
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
