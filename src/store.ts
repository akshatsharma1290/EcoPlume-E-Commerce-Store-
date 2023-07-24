import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store/cartSlice";
import cartPageTransformReducer from "./store/cartPageTransform";
import ProductSliceReducer from "./store/productSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartPageTransform: cartPageTransformReducer,
    product : ProductSliceReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
