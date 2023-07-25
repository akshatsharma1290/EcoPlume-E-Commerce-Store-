import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store/cartSlice";
import cartPageTransformReducer from "./store/cartPageTransform";
import ProductSliceReducer from "./store/productSlice"
import cartItemsReducer from "./store/cartItemsSlice"
import checkoutPriceReducer from "./store/checkoutPriceSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartPageTransform: cartPageTransformReducer,
    product : ProductSliceReducer,
    cartItems : cartItemsReducer,
    checkoutPrice : checkoutPriceReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
