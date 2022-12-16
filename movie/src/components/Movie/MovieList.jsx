import React from 'react'
import MovieItem from './MovieItem';
import { useSelector } from "react-redux";

function MovieList() {
  const movies = useSelector((state) => state.movieReducer.movies);
  return (
    <>
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID}
          {...movie}
        />
      ))}
    </>
  )
}
export default MovieList;