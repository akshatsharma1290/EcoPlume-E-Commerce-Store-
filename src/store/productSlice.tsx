import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ProductState = {
  url: string;
  type: string;
  product: string;
  title: string;
};

const initialState: ProductState = {
  url: "",
  type: "",
  product: "",
  title: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductItems: (state, action: PayloadAction<ProductState>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setProductItems } = productSlice.actions;
export const productSelector = (state: RootState) => state.product;
export default productSlice.reducer;
