import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English" },
  { code: "he", name: "עברית" },
];

export function LanguageSelector() {
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
