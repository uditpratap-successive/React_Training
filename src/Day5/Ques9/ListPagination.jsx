/*9.Create a React component that makes GraphQL queries to retrieve a list of items (e.g., a list of books, movies, or products) from a GraphQL API. 
Implement pagination for large datasets and display the data in a user-friendly way.*/

import React, { useState } from "react";
import useList from "./useList";
import "./CharacterList.css";

const ListPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error } = useList(currentPage);

  if (loading) return <div>Spinner</div>;
  if (error) return <div>Something went wrong</div>;

  const nextPage = () => {
    setCurrentPage((currentpage) => currentpage + 1);
  };

  const prevPage = () => {
    setCurrentPage((currentpage) => currentpage - 1);
  };

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
      <div>
        {currentPage > 1 && <button onClick={prevPage}>Previous</button>}
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default ListPagination;
