import { Route, Routes } from "react-router";
import "../styles/App.scss";
import { routes } from "../routes/routesConfig";
import { Header } from "../modules/Header/Header";
import { Footer } from "../modules/Footer/Footer";
import { HomePage } from "../pages/Home/HomePage";

function App() {
  return (
    <>
      <div className="App">
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
