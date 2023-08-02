import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  price: 0,
};

const checkoutPriceSlice = createSlice({
  name: "checkoutPrice",
  initialState,
  reducers: {
    setCheckoutPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
  },
});

export const { setCheckoutPrice } = checkoutPriceSlice.actions;
export const checkoutPriceSelector = (state: RootState) =>
  state.checkoutPrice.price;
export default checkoutPriceSlice.reducer;
