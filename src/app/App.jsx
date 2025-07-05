import { Route, Routes } from "react-router";
import styles from "./App.module.scss";
import { routes } from "../routes/routesConfig";
import { Header } from "../modules/Header/Header";
import { Footer } from "../modules/Footer/Footer";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
