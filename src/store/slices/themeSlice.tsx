import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type theme = {
  theme: string;
};

const initialState: theme = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const themeSelector = (state: RootState) => state.theme.theme;
export default themeSlice.reducer;
