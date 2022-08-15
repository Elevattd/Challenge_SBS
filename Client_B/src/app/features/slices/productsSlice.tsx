import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "../../containers/Home/types";

const initialState: IHomePageState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
