import { useTranslation } from "react-i18next";

const languageOptions = [
  { code: "en", name: "English" },
  { code: "he", name: "עברית" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "de", name: "Deutsch" },
  { code: "zh", name: "中文" },
  { code: "ar", name: "العربية" },
  { code: "ru", name: "Русский" },
  { code: "ja", name: "日本語" },
  { code: "hi", name: "हिन्दी" },
];

export function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <select
      value={i18n.language}
      onChange={(event) => void i18n.changeLanguage(event.target.value)}
    >
      {languageOptions.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name}
        </option>
      ))}
    </select>
  );
}
