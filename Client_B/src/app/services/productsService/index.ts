import { Product } from "../../components/ProductList/types";
import { graphQLClient } from "../../graphql";
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./mutations";
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

  async postProduct({
    name,
    description,
    price,
    image,
  }: Product): Promise<Product> {
    try {
      const response = await graphQLClient.request(CREATE_PRODUCT, {
        name,
        description,
        price: parseInt(price),
        image,
      });

      if (!response || !response.createProduct) {
        throw new Error("No data returned from server");
      }
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct({
    id,
    name,
    description,
    price,
    image,
  }: Product): Promise<Product> {
    try {
      const response = await graphQLClient.request(UPDATE_PRODUCT, {
        id,
        name,
        description,
        price: parseInt(price),
        image,
      });
      if (!response) {
        throw new Error("No data returned from server");
      }
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(id: string): Promise<Product> {
    try {
      const response = await graphQLClient.request(DELETE_PRODUCT, {
        id,
      });
      if (!response) {
        throw new Error("No data returned from server");
      }
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new ProductService();
