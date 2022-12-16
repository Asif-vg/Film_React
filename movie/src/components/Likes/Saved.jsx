import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeMoviesFromList } from "../../redux/actions/actions";

function Saved() {
    const dispatch = useDispatch();
    const listMovies = useSelector((state) => state.movieReducer.listMovies);
  return (
    <>
      <div className="mt-2 w-9/12">
        <div className="grid grid-cols-4 gap-4 my-4 ">
        {listMovies.map((item) => {
          return (
            <div className="movieItem  relative bg-[#19191B]  relative p-4 rounded-lg" key={item.imdbID}>
              <div className="relative ">
                  <img src={item.Poster} alt="Movie" className='rounded-xl object-cover h-[300px] w-full' />
                  <div className={`absolute right-1 top-1 w-6 h-6 rounded-full bg-slate-900 flex justify-center items-center group transition-all cursor-pointer`}
                   onClick={() => dispatch(removeMoviesFromList(item.imdbID))}>
                 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <div className="movieTitle">
                  <p className='text-2xl font-bold text-gray-300 text-center mt-4 px-2'>{item.Title}</p>
              </div>
            </div>
           
          );
        })}
         
        </div>
      </div>   
    </>
  )
}
export default Saved;