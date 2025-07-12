import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, actions) => {
      const exists = state.data.find((el) => el.id === actions.payload.id);

      if (!exists) {
        state.data = [...state.data, actions.payload];
      } else {
        state.data = state.data.filter((el) => el.id !== actions.payload.id);
      }
    },

    // ✅ Новый экшен для очистки
    clearFavorites: (state) => {
      state.data = [];
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorites, clearFavorites } = favoritesSlice.actions;
