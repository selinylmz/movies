import React from "react";
import List from "../movies/components/List";
import Search from "../movies/components/Search";
import Pagination from "../movies/components/Pagination";

export const Home = () => {
  return (
    <div>
      <Search />
      <List />
      <Pagination />
    </div>
  );
};
