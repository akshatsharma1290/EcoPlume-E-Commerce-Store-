import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  isDataRetrieved: false,
};

const booleanSlices = createSlice({
  name: "booleanSlice",
  initialState,
  reducers: {
    dataRetrieved : (state) => {
      state.isDataRetrieved = true;
    },
  },
});

export const { dataRetrieved } = booleanSlices.actions;
export const booleanSliceSelector = (state: RootState) => state.boolean;
export default booleanSlices.reducer;
