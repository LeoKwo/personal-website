// LanguageContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { translations } from "./translations";

// Create a Context for Language
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  //const [language, setLanguage] = useState("en"); // Default language
  const [language, setLanguage] = useState(() => {
    // Load the language from localStorage or default to 'en'
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    // Save the selected language to localStorage
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);