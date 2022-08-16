import { createSlice } from "@reduxjs/toolkit";
import { IUiPageState } from "../../containers/Home/types";

const initialState: IUiPageState = {
  footer: true,
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setFooterOn: (state) => {
      state.footer = true;
    },
    setFooterOff: (state) => {
      state.footer = false;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setFooterOn, setFooterOff, setIsLoading } = uiSlice.actions;
export default uiSlice.reducer;
