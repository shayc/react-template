/** Represents a language with its metadata. */
export interface Language {
  /** Language code in ISO 639-1 format (e.g., "en", "fr"). */
  code: string;

  /** Localized name of the language. */
  name: string;

  /** Text direction: "ltr" (left-to-right) or "rtl" (right-to-left). */
  dir: "ltr" | "rtl";
}

export const supportedLanguageCodes = new Set(["en", "he"]);

export const getLanguageName = (code: string): string =>
  new Intl.DisplayNames([code], { type: "language" }).of(code) ?? code;

export const getLanguageDir = (code: string): "ltr" | "rtl" => {
  const rtlLanguages = new Set(["ar", "he", "fa", "ur"]);
  return rtlLanguages.has(code) ? "rtl" : "ltr";
};

const getLanguages = (codes: Set<string>): Language[] =>
  Array.from(codes).map((code) => ({
    code,
    name: getLanguageName(code),
    dir: getLanguageDir(code),
  }));

export const availableLanguages = getLanguages(supportedLanguageCodes);
