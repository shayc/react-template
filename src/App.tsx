import { lazy } from "react";
import { Link, Route, Routes } from "react-router";
import { LanguageSelector } from "./components/LanguageSelector/LanguageSelector";
import { useDocumentLanguage } from "./hooks/useDocumentLanguage";
import { availableLanguages } from "./i18n/languages";

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
  useDocumentLanguage();

  return (
    <>
      <header>
        <nav aria-label="main">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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
