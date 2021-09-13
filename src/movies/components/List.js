import React from "react";
import { useSelector } from "react-redux";

const List = () => {
  const movies = useSelector((state) => state.movies.result.Search);
  const listStyle = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    justifyContent:"center"
  };
  return (
    <div style={listStyle}>
      {movies &&
        movies.map((movie) => (
          <div key={movie.imdbID}>
            <img src={movie.Poster} />
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
          </div>
        ))}
    </div>
  );
};
export default List;
