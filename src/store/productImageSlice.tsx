import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ImagePayload = {
  payload: string;
};

const initialState = {
  url: "",
};

const productImageSlice = createSlice({
  name: "productImage",
  initialState,
  reducers: {
    activeProductImage(state, action: ImagePayload) {
      state.url = action.payload;
    },
  },
});

export const { activeProductImage } = productImageSlice.actions;
export const productImageSelector = (state: RootState) => state.productImage.url;
export default productImageSlice.reducer;
