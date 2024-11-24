import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

function Header() {
  const [bgColor, setBgColor] = useState("black");
  const [txtColor, setTxtColor] = useState("white");

  return (
    <>
      <section
        className="bg-black text-white text-xl sm:text-2xl flex justify-between px-7 sm:px-2 py-4 sm:py-3 "
        style={{ backgroundColor: bgColor, textColor: txtColor }}
      >
        <div className="sm:w-2/12 sm:pl-5 text-center flex gap-2 justify-evenly items-center">
          <i className="fa-solid fa-note-sticky"></i>
          <h1>Sticky Notes</h1>
        </div>

        {/* Dark/Light mode toggle */}
        <div className="sm:w-2/12 text-center"> Light/ Dark </div>
      </section>

      <Navbar />
    </>
  );
}

export default Header;
