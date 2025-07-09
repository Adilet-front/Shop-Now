import { configureStore } from "@reduxjs/toolkit";
import favoritesReducers from "./features/favoritesSlice.js";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducers,
  },
});
