import { NewArrival } from "../modules/NewArrival/NewArrival";
import { BabyToys } from "../pages/AllCategory/Baby’s & Toys/BadyToys";
import { Electronics } from "../pages/AllCategory/Electronics/Electronics";
import { Health } from "../pages/AllCategory/Health/Health";
import { Lifestyle } from "../pages/AllCategory/Lifestyle/Lifestyle";
import { Medicine } from "../pages/AllCategory/Medicine/Medicine";
import { Mens } from "../pages/AllCategory/Men’s/Mens";
import { Pets } from "../pages/AllCategory/Pets/Pets";
import { Sport } from "../pages/AllCategory/Sports & Outdoor/Sport";
import { Women } from "../pages/AllCategory/Women’s Fashion/Women";

import { Login } from "../pages/Auth/LogIn/Login";
import { Signup } from "../pages/Auth/SignUp/SignUp";
import { ContactsPage } from "../pages/Auth/Contact/ContactsPage";
import { HomePage } from "../pages/Home/HomePage";
import { ResultPage } from "../pages/ResultPage/ResultPage";
import { Favorites } from "../pages/Favorites/Favorites";
import { NotFound } from "../modules/NotFound/NotFound";


export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/search",
    element: <ResultPage />,
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
    path: "/contact", 
    element: <ContactsPage />,
  },

  {
    path: "/new_arrival",
    element: <NewArrival />,
  },

  // all category
  {
    path: "/baby-toys",
    element: <BabyToys />,
  },
  {
    path: "/electronics",
    element: <Electronics />,
  },
  {
    path: "/health",
    element: <Health />,
  },
  {
    path: "/lifestyle",
    element: <Lifestyle />,
  },
  {
    path: "/medicine",
    element: <Medicine />,
  },
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/mens",
    element: <Mens />,
  },
  {
    path: "/pets",
    element: <Pets />,
  },
  {
    path: "/sport",
    element: <Sport />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  // end all category
];


