import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      viteLogo: "Vite Logo",
      reactLogo: "React Logo",
      vitePlusReact: "Vite + React",
      countIs: "count is",
      clickToLearnMore: "Click on the Vite and React logos to learn more",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((error) => {
    console.error(error);
  });

export default i18n;
