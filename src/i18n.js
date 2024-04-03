// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from './ru.json';
import es from './es.json';
import en from './en.json';
import zh from './zh.json'
const resources = {
  en: { translation: en },
  ru: { translation: ru },
  es: { translation: es }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
