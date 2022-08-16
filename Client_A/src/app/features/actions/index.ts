import { Dispatch } from "redux";
import { Product } from "../../components/ProductList/types";
import { clearProduct, setProduct, setProducts } from "../slices/productsSlice";
import { setFooterOff, setFooterOn, setIsLoading } from "../slices/uiSlice";

export const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (products: Product) => dispatch(setProducts(products)),
  setProduct: (product: Product) => dispatch(setProduct(product)),
  clearProduct: () => dispatch(clearProduct()),
  setFooterOff: () => dispatch(setFooterOff()),
  setFooterOn: () => dispatch(setFooterOn()),
  setIsLoading: (isLoading: boolean) => dispatch(setIsLoading(isLoading)),
});
