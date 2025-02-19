import { lazy } from "react";
import { Link, Route, Routes } from "react-router";
import { LanguageSelector } from "./components/LanguageSelector/LanguageSelector";
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
  useDocumentLanguage();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <LanguageSelector />
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}
