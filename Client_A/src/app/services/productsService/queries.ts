import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      description
      price
      image
      author {
        username
      }
    }
  }
`;

export const GET_PRODUCT_ID = gql`
  query ($id: ID!) {
    product(id: $id) {
      id
      name
      description
      image
      price
    }
  }
`;
