import { GraphQLClient } from "graphql-request";
import io from "socket.io-client";

const API = process.env.REACT_APP_API_URL;

export const graphQLClient = new GraphQLClient(`${API}graphql`, {
  headers: {},
});

// Socket io connection
export const socket = io("https://challenge-sbs.herokuapp.com/");
