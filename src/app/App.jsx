import { Route, Routes } from "react-router";
import "../styles/App.scss";
import { routes } from "../routes/routesConfig";
import { HomePage } from "../pages/Home/HomePage";

function App() {
  return (
    <>
      <div>
       <HomePage/>
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
