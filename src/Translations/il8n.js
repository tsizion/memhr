import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      courses: "Courses",
      playlists: "Playlists",
      about: "About",
      signIn: "Sign In",
    },
  },
  am: {
    translation: {
      welcome: "እንኳን ወደ ድህረ ገጻችን በደህና መጡ!",
      courses: "ኮርሶች",
      playlists: "ፕሌይሊስትስ",
      about: "ስለ እኛ",
      signIn: "ግባ",
    },
  },
  ti: {
    translation: {
      welcome: "እንኳን ወደ ድህረ ገጻችን በደህና መጡ!",
      courses: "ኮርሶች",
      playlists: "ፕሌይሊስትስ",
      about: "ስለ እኛ",
      signIn: "ግባ",
    },
  },
};

i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources,
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
  });

export default i18n;
