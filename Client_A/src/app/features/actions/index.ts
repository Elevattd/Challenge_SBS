import { Dispatch } from "redux";
import { Product } from "../../components/ProductList/types";
import { setProducts } from "../slices/productsSlice";

export const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (products: Product) => dispatch(setProducts(products)),
});
