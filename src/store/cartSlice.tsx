import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type CartState = {
  value: number;
};

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
    decrementByNumber: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { incrementCart, decrementCart, decrementByNumber } =
  cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart.value;
export default cartSlice.reducer;
