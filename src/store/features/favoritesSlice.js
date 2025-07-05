import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, actions) => {
      const exe = state.data.filter((el) => el.id === actions.payload.id);
      console.log(exe);

      if (exe.length <= 0) {
        state.data = [...state.data, actions.payload];
      } else {
        state.data = state.data.filter((el) => el.id !== actions.payload.id);
      }
      console.log(state.data);
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorites } = favoritesSlice.actions;
