import { createSlice } from "@reduxjs/toolkit";
import { IUiPageState } from "../../containers/Home/types";

const initialState: IUiPageState = {
  footer: true,
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
  },
});

export const { setFooterOn, setFooterOff } = uiSlice.actions;
export default uiSlice.reducer;
