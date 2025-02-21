import { useTranslation } from "react-i18next";

export interface LanguageSelectorProps {
  languages: { code: string; name: string }[];
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
