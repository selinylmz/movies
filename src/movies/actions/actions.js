import { GET_SEARCH_MOVIE } from "./types";
import { API_URL } from "./urls";

export function getMovies(seach, page = 1) {
  return (dispatch) => {
    fetch(`${API_URL}?page=${page}&s=${seach}&apikey=79094211`).then(
      (response) => {
        response
          .json()
          .then((data) =>
            dispatch(
              loadSearchMovies({ SearchKey: seach, currentPage: page, ...data })
            )
          );
      }
    );
  };
}
function loadSearchMovies(movies) {
  return {
    type: GET_SEARCH_MOVIE,
    payload: movies,
  };
}
