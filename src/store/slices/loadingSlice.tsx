import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  isLoading: true,
};

const loadingSlice = createSlice({
  name: "booleanSlice",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export const loadingSelector = (state: RootState) => state.loading.isLoading;
export default loadingSlice.reducer;
