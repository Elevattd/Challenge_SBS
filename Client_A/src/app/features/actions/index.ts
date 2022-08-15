import { Dispatch } from "redux";
import { Product } from "../../components/ProductList/types";
import { clearProduct, setProduct, setProducts } from "../slices/productsSlice";

export const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (products: Product) => dispatch(setProducts(products)),
  setProduct: (product: Product) => dispatch(setProduct(product)),
  clearProduct: () => dispatch(clearProduct()),
});
