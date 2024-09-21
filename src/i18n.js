import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enFaqs from './locales/en/faqs.json';
import enLanding from './locales/en/landing.json';
import arFaqs from './locales/ar/faqs.json';
import arLanding from './locales/ar/landing.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Load translations from the backend
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: {
        faqs: enFaqs,
        landing: enLanding
      },
      ar: {
        faqs: arFaqs,
        landing: arLanding
      }
    },
    supportedLngs: ['en', 'ar'], // Supported languages
    fallbackLng: 'en', // Fallback language if detection fails
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
