import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router";
import "./App.css";
import { useDocumentLanguage } from "./hooks/useDocumentLanguage";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";

export function App() {
  const { i18n } = useTranslation();

  useDocumentLanguage();

  function changeLanguage(lang: string) {
    void i18n.changeLanguage(lang);
  }

  return (
    <>
      <button type="button" onClick={() => changeLanguage("en")}>
        en
      </button>

      <button type="button" onClick={() => changeLanguage("he")}>
        he
      </button>

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}
