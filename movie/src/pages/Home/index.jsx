import React from 'react'
import MovieList from '../../components/Movie/MovieList';
import Nav from '../../components/Nav/Nav';

function index() {
  return (
    <>
        <div className=" w-full min-h-screen overflow-x-hidden bg-primary">
            <Nav/>
            <div className="container text-text-primary px-4">
                <div className="grid grid-cols-3 gap-4 my-12">
                    <MovieList />
                </div>
            </div>
      </div>   
    </>
  )
}
export default index;