//Set up a GraphQL client library like Apollo Client. Create a simple component that uses the client to fetc


import React from "react";
import CharactersList from "./Characterslist.jsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});
const GraphQlapp = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <CharactersList />
      </ApolloProvider>
    </>
  );
};

export default GraphQlapp;
