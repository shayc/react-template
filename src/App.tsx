import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { Link, Route, Routes } from "react-router";
import { useDocumentLanguage } from "./hooks/useDocumentLanguage";

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
  const { i18n } = useTranslation();

  useDocumentLanguage();

  function changeLanguage(lang: string) {
    void i18n.changeLanguage(lang);
  }

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div>
        <button type="button" onClick={() => changeLanguage("en")}>
          en
        </button>

        <button type="button" onClick={() => changeLanguage("he")}>
          he
        </button>
      </div>

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}
