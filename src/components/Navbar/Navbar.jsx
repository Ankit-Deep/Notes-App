import React from "react";
import createNewNote from "../Note/Notes.jsx"
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <section className=" w-full flex justify-around py-4 px-5 gap-4 text-lg ">
        {/* Create New Note */}
        <NavLink
          to="/"
          className="w-6/12 text-center py-2 border-2 rounded-lg shadow-lg"
        >
          <button className="" onClick={createNewNote}>
            + Note
          </button>
        </NavLink>

        {/* Search Button */}
        <NavLink
          to="/search"
          className="w-6/12 text-center py-2 border-2 rounded-lg shadow-lg"
        >
          <button className=" ">Search</button>
        </NavLink>
      </section>
    </>
  );
}

export default Navbar;
