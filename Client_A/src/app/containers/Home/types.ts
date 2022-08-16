import { Product } from "../../components/ProductList/types";

export interface IHomePageState {
  products: Product[];
  product: Product;
}

export interface IUiPageState {
  footer: boolean;
}
