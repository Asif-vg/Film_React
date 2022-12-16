import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostMovies } from "../../redux/actions/actions";
// import "./ListPage.css";

function ListPage() {
  const {id}=useParams()
  const [title, setTitle] = useState("");
  // const id = props.match.params.id;
  const movies = useSelector((state) => state.movieReducer.postMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setTitle(data.title);
        data.movies.forEach((imdbID) => dispatch(getPostMovies(imdbID)));
      });

  }, []);
  console.log(movies)
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-primary">
      <div className="container text-text-primary px-4">
        <div className="mt-2">
          <h1 className="text-4xl font-bold ">{title}</h1>
          <div className="grid grid-cols-3 gap-4 my-4 " >
                {movies.map((item) => (
                   <div className="movieItem  relative bg-[#19191B]  relative p-4 rounded-lg " key={item[0].imdbID}>
                      <div className="relative ">
                          <img src={item[0].Poster} alt="Movie" className='rounded-xl object-cover h-[600px] w-full' />
                      </div>
                      <div className="movieTitle">
                          <p className='text-2xl font-bold text-gray-300 text-center mt-4 px-2'>{item[0].Title}</p>
                      </div>
                 </div>
                ))}
              </div>
        </div>
      </div>
    </div>
  );
}

export default ListPage;
