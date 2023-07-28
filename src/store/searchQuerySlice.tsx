import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  query: "Sneaker",
};

const searchQuerySlice = createSlice({
  name: "searchQuery",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = searchQuerySlice.actions;
export const searchQuerySelector = (state: RootState) =>
  state.searchQuery.query;
export default searchQuerySlice.reducer;
