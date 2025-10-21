import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


if (!document.documentElement.dataset.theme) {
  document.documentElement.dataset.theme =
    localStorage.getItem("theme") || "dark";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
