import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!
    $description: String!
    $price: Int!
    $image: String!
  ) {
    createProduct(
      name: $name
      description: $description
      image: $image
      price: $price
    ) {
      name
      description
      image
      price
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: ID!
    $name: String!
    $description: String!
    $price: Int!
    $image: String!
  ) {
    updateProduct(
      id: $id
      name: $name
      description: $description
      image: $image
      price: $price
    ) {
      name
      description
      image
      price
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(productId: $id) {
      id
    }
  }
`;
