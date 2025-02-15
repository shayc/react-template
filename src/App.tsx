import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

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
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">{t("clickToLearnMore")}</p>
    </>
  );
}

export default App;
