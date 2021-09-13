import React from "react";
import { getMovies } from "../actions/actions";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  let timeout = null;
  const getSeachResult = (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch(getMovies(e.target.value));
    }, 300);
  };

  return (
    <input type="search" placeholder="placeholder" onKeyUp={getSeachResult} />
  );
};

export default Search;
