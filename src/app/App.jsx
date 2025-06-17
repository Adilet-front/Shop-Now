import { Route, Routes } from "react-router";
import "../styles/App.scss";
import { routes } from "../routes/routesConfig";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Footer />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
