import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type ProductState = {
  Imgurl: string;
  product: string;
  title: string;
  price: string;
};

const getInitialProductState = (): ProductState => {
  const storedState = localStorage.getItem("productState");
  if (storedState) {
    return JSON.parse(storedState) as ProductState;
  }
  return {
    Imgurl: "",
    product: "",
    title: "",
    price: "",
  };
};

const initialState: ProductState = getInitialProductState();

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductItems: (state, action: PayloadAction<ProductState>) => {
      const newState = { ...state, ...action.payload };
      localStorage.setItem("productState", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { setProductItems } = productSlice.actions;
export const productSelector = (state: RootState) => state.product;
export default productSlice.reducer;
