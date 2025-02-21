/** Represents a language with its metadata. */
export interface Language {
  /** Language code in ISO 639-1 format (e.g., "en", "fr"). */
  code: string;

  /** Text direction: "ltr" (left-to-right) or "rtl" (right-to-left). */
  dir: "ltr" | "rtl";

  /** Localized name of the language. */
  name: string;
}

export const supportedLanguageCodes = ["en", "he"];

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
