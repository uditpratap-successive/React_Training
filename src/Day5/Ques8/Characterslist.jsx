//8.set up a GraphQL client library like Apollo Client. Create a simple component that uses the client to fetch and display data from a GraphQL API

import React from "react";
import useCharacters from "./useCharacters";

import "./CharacterList.css";

const Characterslist = () => {
  const { data, loading, error } = useCharacters();

  if (loading) return <div>Spinner</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Characterslist;
