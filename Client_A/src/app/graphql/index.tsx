import { GraphQLClient } from "graphql-request";
import io from "socket.io-client";

const API_URL = process.env.API_URL;

export const graphQLClient = new GraphQLClient(
  "https://challenge-sbs.herokuapp.com/graphql",
  {
    headers: {},
  }
);

// Socket io connection
export const socket = io("https://challenge-sbs.herokuapp.com/");
