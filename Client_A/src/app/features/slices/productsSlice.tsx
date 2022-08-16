import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "../../containers/Home/types";

const initialState: IHomePageState = {
  products: [],
  product: {
    id: "",
    name: "",
    description: "",
    price: 0,
    image: "",
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
    setProduct: (state, action) => {
      state.product = action.payload.product || action.payload.productByName;
    },
    clearProduct: (state) => {
      state.product = initialState.product;
    },
  },
});

export const { setProducts, setProduct, clearProduct } = productsSlice.actions;
export default productsSlice.reducer;
