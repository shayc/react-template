import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { useSetDocumentLanguage } from "./hooks/useSetDocumentLanguage";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  useSetDocumentLanguage();

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang).catch((error) => {
      console.error("Failed to change language", error);
    });
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

export default App;
