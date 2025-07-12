import { Navigate } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";

import { Signup } from "../pages/Auth/SignUp/SignUp";
import { Login } from "../pages/Auth/LogIn/Login";

import { HomePage } from "../pages/Home/HomePage";
import { ResultPage } from "../pages/ResultPage/ResultPage";
import { ContactsPage } from "../pages/Auth/Contact/ContactsPage";
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

import { Favorites } from "../pages/Favorites/Favorites";
import { NotFound } from "../modules/NotFound/NotFound";

import ProfileEditPage from "../pages/ProofileEdit/ProfileEditPage"; 
=======
import { OurStory } from "../pages/OurStory/OurStory";
import { Cart } from "../pages/Cart/Cart";


export const routes = [
  {
    path: "/",
    element: <Navigate to="/sign-up" replace />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <ProtectedRoute>
        <ResultPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/contact",
    element: (
      <ProtectedRoute>
        <ContactsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/new_arrival",
    element: (
      <ProtectedRoute>
        <NewArrival />
      </ProtectedRoute>
    ),
  },
  {
    path: "/Cart",
    element: (
      <ProtectedRoute>
        <Cart />
      </ProtectedRoute>
    )
  },
  {
    path: "/our-story",
    element: (
      <ProtectedRoute>
        <OurStory />
      </ProtectedRoute>
    ),
  },

  {
    path: "/baby-toys",
    element: (
      <ProtectedRoute>
        <BabyToys />
      </ProtectedRoute>
    ),
  },
  {
    path: "/electronics",
    element: (
      <ProtectedRoute>
        <Electronics />
      </ProtectedRoute>
    ),
  },
  {
    path: "/health",
    element: (
      <ProtectedRoute>
        <Health />
      </ProtectedRoute>
    ),
  },
  {
    path: "/lifestyle",
    element: (
      <ProtectedRoute>
        <Lifestyle />
      </ProtectedRoute>
    ),
  },
  {
    path: "/medicine",
    element: (
      <ProtectedRoute>
        <Medicine />
      </ProtectedRoute>
    ),
  },
  {
    path: "/women",
    element: (
      <ProtectedRoute>
        <Women />
      </ProtectedRoute>
    ),
  },
  {
    path: "/mens",
    element: (
      <ProtectedRoute>
        <Mens />
      </ProtectedRoute>
    ),
  },
  {
    path: "/pets",
    element: (
      <ProtectedRoute>
        <Pets />
      </ProtectedRoute>
    ),
  },
  {
    path: "/sport",
    element: (
      <ProtectedRoute>
        <Sport />
      </ProtectedRoute>
    ),
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },

  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfileEditPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
