import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type CartItemsType = {
  title: string;
  size: string | number;
  imgUrl: string;
  price: string;
  quantity: number;
};

const initialState: CartItemsType[] = [];

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<CartItemsType>) {
      const { title, size } = action.payload;
      const itemToUpdate = state.find(
        (item) => item.title === title && item.size === size
      );
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { addCartItem } = cartItemsSlice.actions;
export const cartItemsSelector = (state: RootState) => state.cartItems;
export default cartItemsSlice.reducer;
