import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { useDocumentLanguage } from "./hooks/useDocumentLanguage";
import viteLogo from "/vite.svg";

export function App() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  useDocumentLanguage();

  function changeLanguage(lang: string) {
    void i18n.changeLanguage(lang);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt={`${t("viteLogo")}`} />
        </a>

        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="logo react"
            alt={`${t("reactLogo")}`}
          />
        </a>
      </div>

      <h1>{t("vitePlusReact")}</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t("countIs")} {count}
        </button>

        <p>
          <Trans i18nKey="editAndSave">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Trans>
        </p>
      </div>

      <p className="read-the-docs">{t("clickToLearnMore")}</p>

      <button type="button" onClick={() => changeLanguage("en")}>
        en
      </button>

      <button type="button" onClick={() => changeLanguage("he")}>
        he
      </button>
    </>
  );
}
