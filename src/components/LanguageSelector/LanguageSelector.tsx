import { useTranslation } from "react-i18next";
import { Language } from "../../i18n/languages";

export interface LanguageSelectorProps {
  languages: Language[];
}

export function LanguageSelector({ languages }: LanguageSelectorProps) {
  const { i18n } = useTranslation();

  return (
    <select
      value={i18n.language}
      onChange={(event) => void i18n.changeLanguage(event.target.value)}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}
