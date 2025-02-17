import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

export function Home() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <div>
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
    </div>
  );
}
