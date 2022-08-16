export interface Product {
  id?: string;
  name?: string;
  description?: string;
  price?: any | number;
  image: string;
  productByName?: Product;
}
