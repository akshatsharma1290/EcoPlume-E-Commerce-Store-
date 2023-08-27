import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import cartPageTransformReducer from "./slices/cartPageTransform";
import ProductSliceReducer from "./slices/productSlice";
import cartItemsReducer from "./slices/cartItemsSlice";
import checkoutPriceReducer from "./slices/checkoutPriceSlice";
import searchQueryReducer from "./slices/searchQuerySlice";
import paginationReducer from "./slices/paginationSlice";
import filterReducer from "./slices/filterSlice";
import loadingReducer from "./slices/loadingSlice";
import themeReducer from "./slices/themeSlice";
import focusReducer from "./slices/focusSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartPageTransform: cartPageTransformReducer,
    product: ProductSliceReducer,
    cartItems: cartItemsReducer,
    checkoutPrice: checkoutPriceReducer,
    searchQuery: searchQueryReducer,
    pagination: paginationReducer,
    filter: filterReducer,
    loading: loadingReducer,
    theme: themeReducer,
    focus : focusReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
