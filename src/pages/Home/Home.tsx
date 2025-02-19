import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import reactLogo from "../../assets/react.svg";
import classes from "./Home.module.css";
import viteLogo from "/vite.svg";

export function Home() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <div className={classes.root}>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className={classes.logo}
            alt={`${t("viteLogo")}`}
          />
        </a>

        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className={`${classes.logo} ${classes.react}`}
            alt={`${t("reactLogo")}`}
          />
        </a>
      </div>

      <h1>{t("vitePlusReact")}</h1>

      <div className={classes.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          {t("countIs")} {count}
        </button>

        <p>
          <Trans i18nKey="editAndSave">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Trans>
        </p>
      </div>
      <p className={classes.readTheDocs}>{t("clickToLearnMore")}</p>
    </div>
  );
}
