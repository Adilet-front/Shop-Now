import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import styles from "./index.module.scss";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router";
import "../firebase.js";
import "./i18n";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
