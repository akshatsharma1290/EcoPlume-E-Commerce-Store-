import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
    focusedElement : ""
}

const focusSlice = createSlice({
    name: "booleanSlice",
    initialState,
    reducers: {
      moveFocus : (state , action : PayloadAction<string>) => {
        state.focusedElement = action.payload
      }
    },
  });

export const { moveFocus } = focusSlice.actions;
export const focusSliceSelector = (state : RootState) => state.focus.focusedElement
export default focusSlice.reducer