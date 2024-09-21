import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');

  // Function to change the language
  const changeLanguage = (lng) => {
    setLanguage(lng); 
    i18n.changeLanguage(lng); 
    document.dir = lng === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lng);
  };

  useEffect(() => {
    changeLanguage(language);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
