import { GraphQLClient } from "graphql-request";
import io from "socket.io-client";

export const graphQLClient = new GraphQLClient(
  `${process.env.REACT_APP_API_URL}graphql`,
  {
    headers: {},
  }
);
// Socket io connection
export const socket = io(
  process.env.REACT_APP_API_URL || "http://localhost:4000"
);
