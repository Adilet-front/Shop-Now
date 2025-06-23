import { NewArrival } from "../modules/NewArrival/NewArrival";
import { Login } from "../pages/Auth/LogIn/LogIn";
import { Signup } from "../pages/Auth/SignUp/SignUp";
import { HomePage } from "../pages/Home/HomePage";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/new_arrival",
    element: <NewArrival />,
  },
];
