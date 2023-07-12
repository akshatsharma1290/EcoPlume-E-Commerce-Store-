import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
