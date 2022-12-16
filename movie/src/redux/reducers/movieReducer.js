import * as ActionTypes from "../actions/actionTypes";

const initialState = {
    movies:[],
    listMovies: [],
    linkActive:false,
    postMovies: [],

}

function movieReducer(state = initialState, action) {
    switch(action.type) {
      case ActionTypes.ADD_MOVIES:
        return {...state,movies:action.payload}
        
      case ActionTypes.ADD_MOVIES_TO_LIST:
        const movie = state.movies.find((item) => item.imdbID === action.payload);
        const listMovies = [...state.listMovies, { ...movie }];
        return { ...state, listMovies };


      case ActionTypes.REMOVE_MOVIE_FROM_LIST:
        const newLinkMovies = state.listMovies.filter(
          (item) => item.imdbID !== action.payload
        );
        return { ...state, listMovies: newLinkMovies };

        case ActionTypes.SET_LINKACTIVE:
      return { ...state, linkActive: action.payload };
        case ActionTypes.ADD_POST_MOVIES:
          return { ...state, postMovies: [...state.postMovies, action.payload] };
      default:
        return state;
    }
}
export default movieReducer;