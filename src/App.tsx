import { Route, Routes } from "react-router";
import "./App.css";
import { useDocumentLanguage } from "./hooks/useDocumentLanguage";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";

export function App() {
  useDocumentLanguage();

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}
