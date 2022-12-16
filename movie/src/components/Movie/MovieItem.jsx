import React from 'react';
import { useDispatch } from "react-redux";
import { addMoviesToList} from "../../redux/actions/actions";
import { HeartIcon } from "@heroicons/react/24/outline";

function MovieItem({Title, Poster,imdbID,disabled }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="movieItem  relative bg-[#19191B]  relative p-4 rounded-lg ">
         <div className="relative ">
            <img src={Poster} alt="Movie" className='rounded-xl object-cover h-[600px] w-full' />
            <div className={` absolute right-3 top-3 w-9 h-9 rounded-full bg-slate-900 flex justify-center items-center group transition-all cursor-pointer`}
            
             onClick={() => dispatch(addMoviesToList(imdbID))}
            >
              <HeartIcon   width={24} className={` stroke-sky-400 mt-0.5 transition-all group-hover:fill-sky-400 false`}/>
            </div>
         </div>
         <div className="movieTitle">
             <p className='text-2xl font-bold text-gray-300 text-center mt-4 px-2'>{Title}</p>
         </div>
      </div>
    </>
  )
}
export default MovieItem;

