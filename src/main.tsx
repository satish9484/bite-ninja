import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./scss/main.scss";

// Create root and render app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
