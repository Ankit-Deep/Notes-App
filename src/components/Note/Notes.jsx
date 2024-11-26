import React, { useState } from "react";
import ReactDOM from "react-dom";

// Creating individual Note Component
const Note = () => {
  console.log("hjwkjsdf");
};

function Notes() {
  return (
    <>
      <main className="bg-white dark:bg-black text-black dark:text-white w-full px-5 py-5">
        <h3>Recent Notes</h3>

        {/* Section where all the notes will be added, shown etc */}

        <section id="addNote" className="">
          {/* <h1>Add notes here</h1> */}
        </section>
      </main>
    </>
  );
}

export default Notes;
