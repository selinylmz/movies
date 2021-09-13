import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../actions/actions";

const Pagination = () => {
  const dispatch = useDispatch();
  const searchKey = useSelector((state) => state.movies.result.SearchKey);
  const currentPage = useSelector((state) => state.movies.result.currentPage);
  const totalResult = useSelector((state) => state.movies.result.totalResults);
  const totalPage = Math.ceil(totalResult / 10) || 0;

  const getPage = (pageNumber) => {
    dispatch(getMovies(searchKey, pageNumber));
  };
  const getPrevPage = () => {
    if (currentPage < 1) {
      return false;
    }
    dispatch(getMovies(searchKey, currentPage - 1));
  };
  const getNextPage = () => {
    if (currentPage >= totalPage) {
      return false;
    }
    dispatch(getMovies(searchKey, currentPage + 1));
  };
  const getFirstPage = () => {
    dispatch(getMovies(searchKey, 1));
  };
  const getLastPage = () => {
    dispatch(getMovies(searchKey, totalPage));
  };
  const pageRange = () => {
    let start = currentPage - 1;
    let end = currentPage + 2;

    if (end > totalPage) {
      start -= end - totalPage;
      end = totalPage;
    }
    if (start <= 0) {
      end += (start - 1) * -1;
      start = 1;
    }
    end = end > totalPage ? totalPage : end;
    return { start: start, end: end };
  };
  const setButtons = () => {
    let pages = [];
    for (let i = 1; i < totalPage + 1; i++) {
      if (pageRange().start <= i && pageRange().end >= i) {
        pages.push(
          <button
            type="button"
            onClick={() => getPage(i)}
            key={i}
            style={{ background: currentPage == i && "red" }}
          >
            {i}
          </button>
        );
      }
    }
    return pages;
  };
  return (
    <div style={{ visibility: totalResult ? "visible" : "hidden" }}>
      <button type="button" onClick={() => getFirstPage()}>
        &lt;&lt;
      </button>
      <button type="button" onClick={() => getPrevPage()}>
        &lt;
      </button>
      {setButtons()}
      <button type="button" onClick={() => getNextPage()}>
        &gt;
      </button>
      <button type="button" onClick={() => getLastPage()}>
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
