import ApolloClient, { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  credentials: "include"
});

export { client, gql, useQuery };
