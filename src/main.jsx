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

useEffect(() => {
  const reveal = () => {
    document.querySelectorAll(".fade-in, .fade-in-up, .reveal").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();
}, []);
