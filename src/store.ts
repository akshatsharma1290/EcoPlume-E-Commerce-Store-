import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store/cartSlice";
import cartPageTransformReducer from "./store/cartPageTransform";
import productImageReducer from "./store/productImageSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartPageTransform: cartPageTransformReducer,
    productImage: productImageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
