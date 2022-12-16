import React from 'react'
import Search from "./Search"
import BookMark from "./BookMark";
function Nav() {
  return (
    <>
    <nav className="my-2 mx-auto container w-11/12 bg-alternative  rounded-lg">
        <div className="flex justify-between items-center p-4">
          <div className="font-bold text-2xl text-white">RenderMovie</div>
          <div>
            <Search />
          </div>
          <BookMark/>
        </div>
      </nav>
    </>
  )
}
export default Nav;