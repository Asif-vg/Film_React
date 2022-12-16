import axios from "axios";
import { baseUrl,apiKey } from "../constants";
import * as ActionTypes from "./actionTypes";

export const getPostMovies = (imdbID) => {
    return function (dispatch) {
      let postMovies = [];
      axios
        .get(baseUrl + `?i=${imdbID}&apikey=${apiKey}`)
        .then((res) => res.data)
        .then((data) => {
          postMovies = [...postMovies, data];
          dispatch(addPostMovie(postMovies));
        });
    };
  };
  
export const getMovies = async (searchLine) => {
    const res = await axios.get(baseUrl + `?s=${searchLine}&apikey=${apiKey}`);
    const data = res.data.Search;
    if (!data) {
      throw console.log("Error");
    }
    return data;
};

export const addMovies = (payload) =>({
    type: ActionTypes.ADD_MOVIES,
    payload,
});
export const addPostMovie = (payload) => ({
    type: ActionTypes.ADD_POST_MOVIES,
    payload,
  });
  
export const addMoviesToList = (payload) =>({
    type: ActionTypes.ADD_MOVIES_TO_LIST,
    payload,
});


export const removeMoviesFromList = (payload) =>({
    type: ActionTypes.REMOVE_MOVIE_FROM_LIST,
    payload,
});
export const setSave = (payload) => ({
    type:ActionTypes.SET_SAVE,
    payload,
})

export const setLinkActive = (payload) => ({
  type: ActionTypes.SET_LINKACTIVE,
  payload,
});
