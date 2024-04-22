//9.Create a React component that makes GraphQL queries to retrieve a list of items (e.g., a list of books, movies, or products) from a GraphQL API. 
//Implement pagination for large datasets and display the data in a user-friendly way.



import React from "react";
import ListPagination from "./ListPagination";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});
const GraphQlapp2 = () => {
  return (
    <>
      <ApolloProvider client={client}>
       <ListPagination/>
      </ApolloProvider>
    </>
  );
};

export default GraphQlapp2;
