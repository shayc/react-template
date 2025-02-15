import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useDocumentLanguage() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language || "en";
    document.documentElement.lang = lang;
    document.documentElement.dir = ["he", "ar"].includes(lang) ? "rtl" : "ltr";
  }, [i18n.language]);
}
