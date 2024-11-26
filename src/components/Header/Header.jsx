import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

function Header() {
  

  return (
    <>
      <section className="bg-purple-800 dark:bg-black text-white text-xl sm:text-2xl flex justify-between px-7 sm:px-2 py-4 sm:py-3 ">
        <div className="sm:w-2/12 sm:pl-5 text-center flex gap-3  items-center">
          <h1>📝 Notes App</h1>
        </div>


      </section>

      {/* This is the navbar basically where create note & search note options are */}
      <Navbar />
    </>
  );
}

export default Header;
