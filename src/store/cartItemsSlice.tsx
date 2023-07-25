import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type CartItemsType = {
  title: string;
  size: string | number;
  imgUrl?: string;
  price?: string;
  quantity?: number;
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
      if (itemToUpdate && itemToUpdate.quantity) {
        itemToUpdate.quantity += 1;
      } else {
        state.push(action.payload);
      }
    },
    removeCartItem(state, action: PayloadAction<CartItemsType>) {
      const { title, size } = action.payload;
      const itemToDelete = state.find(
        (item) => item.title === title && item.size === size
      );
      if(itemToDelete){
        const index = state.indexOf(itemToDelete)
        if(index !== -1){
          state.splice(index , 1)
        }
      }

    },
  },
});

export const { addCartItem , removeCartItem } = cartItemsSlice.actions;
export const cartItemsSelector = (state: RootState) => state.cartItems;
export default cartItemsSlice.reducer;
