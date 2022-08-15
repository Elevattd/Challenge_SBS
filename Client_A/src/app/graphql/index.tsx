import { GraphQLClient } from "graphql-request";
import io from "socket.io-client";

export const graphQLClient = new GraphQLClient(
  "http://localhost:4000/graphql",
  { headers: {} }
);

// Socket io connection
export const socket = io("http://localhost:4000");
