import React, { createContext, useState, useContext } from "react";

// Create the context
const LanguageContext = createContext();

// LanguageProvider component to wrap your app and provide the context
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language is English

  const changeLanguage = (lang) => {
    setLanguage(lang); // Function to change the language
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};
