import { Product } from "../../components/ProductList/types";
import { graphQLClient } from "../../graphql";
import { GET_PRODUCTS } from "./queries";

class ProductService {
  async getProducts(): Promise<Product> {
    try {
      const response = await graphQLClient.request(GET_PRODUCTS);

      if (!response || !response.products) {
        throw new Error("No data returned from server");
      }
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new ProductService();
