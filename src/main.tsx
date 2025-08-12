import React from "react";
import ReactDOM from "react-dom/client";
// Import global SCSS styles - this makes all styles available throughout the app
import "./scss/main.scss";
import App from "./App.tsx";

// Create root and render app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
