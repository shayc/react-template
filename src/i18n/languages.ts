export interface Language {
  code: string;
  name: string;
  dir: "ltr" | "rtl";
}

export const supportedLanguageCodes = [
  "en",
  "he",
  "fr",
  "es",
  "de",
  "zh",
  "ar",
  "ru",
  "ja",
  "hi",
];

export const getLanguageName = (code: string): string =>
  new Intl.DisplayNames([code], { type: "language" }).of(code) ?? code;

export const getLanguageDir = (code: string): "ltr" | "rtl" => {
  const rtlLanguages = new Set(["ar", "he", "fa", "ur"]);
  return rtlLanguages.has(code) ? "rtl" : "ltr";
};

export const availableLanguages: Language[] = supportedLanguageCodes.map(
  (code) => ({
    code,
    name: getLanguageName(code),
    dir: getLanguageDir(code),
  }),
);
