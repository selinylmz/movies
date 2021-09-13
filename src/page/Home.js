import React from "react";
import List from "../movies/components/List";
import Search from "../movies/components/Search";
import Pagination from "../movies/components/Pagination";

export const Home = () => {
  const containerStyle = {

    with: "100%",
    margin: "0 20px"
  };
  return (
    <div style={containerStyle}>
      <Search />
      <List />
      <Pagination />
    </div>
  );
};
