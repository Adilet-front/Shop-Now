import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import styles from "./index.module.scss";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router";
import "../firebase.js";
import "./i18n";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
