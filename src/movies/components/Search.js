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
  const inputStyle = {
    display: "flex",
    justifyContent: "center",
    with: "100%",
    marginBottom: "20px"
  };
  return (
    <div style={inputStyle}>
      <input style={{ width: "100%", height: "35px" }} type="search" placeholder="Search for any movie..." onKeyUp={getSeachResult} />
    </div>

  );
};

export default Search;
