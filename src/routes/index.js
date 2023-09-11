import { Route, Routes } from "react-router-dom";
import ArticlePage from "../pages/ArticlePage";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

export default function IndexRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article/:page/:article" element={<ArticlePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}