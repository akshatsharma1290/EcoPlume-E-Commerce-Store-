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
    setCartValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setCartValue } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart.value;
export default cartSlice.reducer;
