import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getLanguageDir } from "../i18n/languages";

export function useDocumentLanguage() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language || "en";
    document.documentElement.lang = lang;
    document.documentElement.dir = getLanguageDir(lang);
  }, [i18n.language]);
}
