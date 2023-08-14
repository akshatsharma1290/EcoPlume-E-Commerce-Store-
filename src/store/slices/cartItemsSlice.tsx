import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItemsType = {
  title: string;
  size: string | number;
  Imgurl?: string;
  price?: string;
  quantity?: number;
  product ?: string;
  category ?: string
};

type RemoveCart = CartItemsType & {
  removeAll: boolean;
};

const initialState: CartItemsType[] = [];

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<CartItemsType>) => {
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
    removeCartItem: (state, action: PayloadAction<RemoveCart>) => {
      const { title, size, removeAll } = action.payload;
      const itemToDelete = state.find(
        (item) => item.title === title && item.size === size
      );
      if (itemToDelete && itemToDelete.quantity) {
        const index = state.indexOf(itemToDelete);
        if (index !== -1) {
          removeAll || itemToDelete.quantity === 1
            ? state.splice(index, 1)
            : (itemToDelete.quantity -= 1);
        }
      }
    },
    setCartItem: (_, action: PayloadAction<CartItemsType[]>) => {
      return action.payload;
    },
  },
});

export const { addCartItem, removeCartItem, setCartItem } =
  cartItemsSlice.actions;
export const cartItemsSelector = (state: RootState) => state.cartItems;
export default cartItemsSlice.reducer;
