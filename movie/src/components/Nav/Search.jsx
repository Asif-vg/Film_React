import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { addMovies, getMovies } from "../../redux/actions/actions";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Search() {
  const [search,setSearch] = useState("");
  
  const searchLineChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  };
  const dispatch = useDispatch();
  return (
    <>
      <form  className="flex gap-4" onSubmit={searchBoxSubmitHandler}>
        <input
          className="px-4 py-1 text-primary rounded-md focus:outline-none "
          type="text"
          placeholder="Search Movie"
          value={search}
          onChange={searchLineChangeHandler}
        />
        <button className="bg-secondary rounded px-2 py-1.5 bg-opacity-80 hover:bg-opacity-100 relative"
           onClick={() =>
            getMovies(search)
              .then((res) => dispatch(addMovies(res)))
              .catch((err) => {
                dispatch(addMovies([]));
                return err;
              })
          }
        >
          <MagnifyingGlassIcon width={24} className="text-white"/> 
        </button>
      </form>
    </>
  )
}
export default Search;