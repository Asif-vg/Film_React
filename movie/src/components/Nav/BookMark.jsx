import React from 'react';
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
function BookMark() {
  const basketCount = useSelector(state => state.movieReducer.listMovies.length);
  return (
    <>
     <div className="flex gap-4">
      <Link to="/saved-lists">
        <div className="flex relative px-2">
          <BookmarkIcon
            width={32}
            className="text-white hover:fill-current hover:cursor-pointer"
          />
          <span className="absolute -right-1.5 -top-3.5 flex justify-center items-center rounded-full bg-red-400 w-7 h-7 text-sm text-white font-bold">
           {basketCount}
          </span>{" "}
        </div>{" "}
      </Link>
    </div>
    </>
  )
}
export default BookMark;