import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import moviesReducer from './movies/reducers/movies';

export default (history) => combineReducers({
    router: connectRouter(history),
    movies: moviesReducer
});
