import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  pagination: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<number>) => {
      state.pagination = action.payload;
    },
  },
});

export const { setPagination } = paginationSlice.actions;
export const paginationSelector = (state: RootState) =>
  state.pagination.pagination;
export default paginationSlice.reducer;
