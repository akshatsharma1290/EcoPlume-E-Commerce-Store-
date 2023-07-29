import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store/cartSlice";
import cartPageTransformReducer from "./store/cartPageTransform";
import ProductSliceReducer from "./store/productSlice";
import cartItemsReducer from "./store/cartItemsSlice";
import checkoutPriceReducer from "./store/checkoutPriceSlice";
import searchQueryReducer from "./store/searchQuerySlice";
import paginationReducer from "./store/paginationSlice";
import filterReducer from "./store/filterSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartPageTransform: cartPageTransformReducer,
    product: ProductSliceReducer,
    cartItems: cartItemsReducer,
    checkoutPrice: checkoutPriceReducer,
    searchQuery: searchQueryReducer,
    pagination : paginationReducer,
    filter : filterReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
