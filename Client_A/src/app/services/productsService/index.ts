import { Product } from "../../components/ProductList/types";
import { graphQLClient } from "../../graphql";
import { GET_PRODUCTS, GET_PRODUCT_BY_NAME, GET_PRODUCT_ID } from "./queries";

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

  async getProduct(id: string): Promise<Product> {
    try {
      const response = await graphQLClient.request(GET_PRODUCT_ID, { id });
      if (!response || !response.product) {
        throw new Error("No data returned from server");
      }

      return response;
    } catch (error) {
      throw error;
    }
  }

  async getProductByName(name: string): Promise<Product> {
    try {
      const response = await graphQLClient.request(GET_PRODUCT_BY_NAME, {
        name,
      });
      if (!response || !Object.keys(response)) {
        throw new Error("No data returned from server");
      }

      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new ProductService();
