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

export const getLanguageName = (code: string) =>
  new Intl.DisplayNames([code], { type: "language" }).of(code) ?? code;

export const getLanguageDir = (code: string) => {
  const rtlLanguages = new Set(["ar", "he", "fa", "ur"]);
  return rtlLanguages.has(code) ? "rtl" : "ltr";
};

export const availableLanguages = supportedLanguageCodes.map((code) => ({
  code,
  label: getLanguageName(code),
  dir: getLanguageDir(code),
}));
