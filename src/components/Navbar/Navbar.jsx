import React from "react";
import createNewNote from "../Note/Notes.jsx";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <section className="bg-white dark:bg-black text-black dark:text-white w-full flex justify-around py-4 px-5 gap-4 text-lg ">
        {/* Create New Note */}
        <NavLink
          to="/"
          className="bg-white dark:bg-gray-700 w-6/12 text-center py-2 border-1 rounded-lg shadow-sm shadow-black"
        >
          <button className="" onClick={createNewNote}>
            ➕ Note
          </button>
        </NavLink>

        {/* Search Button */}
        <NavLink
          to="/search"
          className="bg-white dark:bg-gray-700 w-6/12 text-center py-2 border-1 rounded-lg shadow-sm shadow-black"
        >
          <button className=" ">🔍 Search</button>
        </NavLink>
      </section>
    </>
  );
}

export default Navbar;
