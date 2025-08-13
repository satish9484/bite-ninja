import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./scss/main.scss";

// Create root and render app
// Initialize theme from localStorage or system preference
(() => {
  const stored = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldUseDark = stored ? stored === "dark" : prefersDark;
  const root = document.documentElement;
  if (shouldUseDark) root.setAttribute("data-theme", "dark");
  else root.removeAttribute("data-theme");
})();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
