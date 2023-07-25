import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  price: 0,
};

const checkoutPriceSlice = createSlice({
  name: "checkoutPrice",
  initialState,
  reducers: {
    incrementCheckoutPrice: (state, action: PayloadAction<number>) => {
      state.price += action.payload;
    },
    decrementCheckoutPrice: (state, action: PayloadAction<number>) => {
      state.price -= action.payload;
    },
  },
});

export const { incrementCheckoutPrice, decrementCheckoutPrice } =
  checkoutPriceSlice.actions;
export const checkoutPriceSelector = (state: RootState) =>
  state.checkoutPrice.price;
export default checkoutPriceSlice.reducer;
