import { GET_SEARCH_MOVIE } from '../actions/types';

export default function(state = { result: [] }, action) {
    switch(action.type) {
        case GET_SEARCH_MOVIE: 
            return { ...state, result: action.payload  };
        default:
            return state;
    }
}
