import { lazy } from "react";
import { Link, Route, Routes } from "react-router";
import { LanguageSelector } from "./components/LanguageSelector/LanguageSelector";
import { useDocumentLanguage } from "./hooks/useDocumentLanguage";
import { availableLanguages } from "./i18n/languages";
import { useTranslation } from "react-i18next";

const Home = lazy(() =>
  import("./pages/Home/Home").then((module) => ({
    default: module.Home,
  })),
);

const About = lazy(() =>
  import("./pages/About/About").then((module) => ({
    default: module.About,
  })),
);

export function App() {
  const { t } = useTranslation();

  useDocumentLanguage();

  return (
    <>
      <header>
        <nav aria-label={t("main")}>
          <ul>
            <li>
              <Link to="/">{t("home")}</Link>
            </li>
            <li>
              <Link to="/about">{t("about")}</Link>
            </li>
          </ul>
        </nav>

        <LanguageSelector languages={availableLanguages} />
      </header>

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}
