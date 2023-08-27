import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum FocusedElement {
  None = "",
  CartPanel = "cartPanel",
  FilterPanel = "filterPanel"
}

interface FocusState {
  focusedElement: FocusedElement;
}

const initialState: FocusState = {
  focusedElement: FocusedElement.None,
};

const focusSlice = createSlice({
  name: "focusSlice",
  initialState,
  reducers: {
    moveFocus: (state, action: PayloadAction<FocusedElement>) => {
      state.focusedElement = action.payload;
    },
    clearFocus: (state) => {
      state.focusedElement = FocusedElement.None;
    },
  },
});

export const { moveFocus, clearFocus } = focusSlice.actions;
export const focusSliceSelector = (state: RootState) =>
  state.focus.focusedElement;
export default focusSlice.reducer;
