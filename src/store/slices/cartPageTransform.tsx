import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Transform = {
  transform: number;
};

const initialState: Transform = {
  transform: 100,
};

const cartPageTransformSlice = createSlice({
  name: "cartPageTransform",
  initialState,
  reducers: {
    showCart: (state) => {
      state.transform = 0;
    },
    hideCart: (state) => {
      state.transform = 100;
    },
  },
});

export const { showCart, hideCart } = cartPageTransformSlice.actions;
export const cartPageTransformSelector = (state: RootState) =>
  state.cartPageTransform.transform;
export default cartPageTransformSlice.reducer;
