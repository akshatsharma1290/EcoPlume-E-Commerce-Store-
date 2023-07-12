import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartState {
  value: number;
}

const initialState: CartState = {
  value: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCart: (state) => {
      state.value += 1;
    },
    decrementCart: (state) => {
      state.value -= 1;
    },
  },
});

export const { incrementCart, decrementCart } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart.value;
export default cartSlice.reducer;
