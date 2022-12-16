import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import axios from "axios";
import {  setSave } from "../../redux/actions/actions";
import Saved from './Saved';

function Like() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [listLink, setLinkList] = useState("#");
  const listMovies = useSelector((state) => state.movieReducer.listMovies);
  const linkActive = useSelector((state) => state.movieReducer.linkActive);
  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  const saveList = () => {
    dispatch(setSave(true));
    axios
      .post("https://acb-api.algoritmika.org/api/movies/list", {
        title: title,
        movies: listMovies.map((item) => item.imdbID),
      })
      .then((res) => {
        setLinkList(res.data.id);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  return (
    <>
        <div className=' min-h-screen overflow-x-hidden text-text-primary transform bg-primary p-6 text-left align-middle shadow-xl '>
      <div className='flex justify-between'>
       <h3 className='text-4xl font-medium leading-6'>Your Liked Movies</h3>
       <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
        </svg>
       </Link>
      </div>
      <div className='mt-6 relative flex w-full'>
        <Saved/>
     
        <div className='bg-alternative w-3/12 rounded max-h-80 p-4 flex flex-col items-center gap-4'>
          <h2 className='font-semibold text-lg'>Saved List</h2>
          <div className='flex flex-col'>
            <input 
              type="text" 
              className='rounded focus:outline-none text-alternative px-3 py-1' 
              placeholder='Title'
              value={title}
              onChange={handleInput}
              disabled={linkActive}
              />
          </div>
          <button 
            className={`bg-blue-100 px-4 py-1 rounded text-primary font-medium hover:bg-blue-200 `}
            type="button"
            onClick={saveList}
            // disabled={title === "" || listMovies.length === 0}
          >
            Create List
          </button>
          <Link
              to={`../list/${listLink}`}
            //  className={`link__none ${linkActive ? "link__block" : null}`}
              target="_blank"
              rel="noopener noreferrer"
            >
             Go to list
          </Link>
         
        </div>
      </div>
    </div>   
    </>
  )
}
export default Like;