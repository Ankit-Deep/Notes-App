import React, { createElement, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

// const allNotes = document.getElementById('addNote');

// export const createNote = () => {
//   console.log("create new note");

//   const newNote = React.createElement(
//     "div",
//     { style:{backgroundColor:"black", w:[200], h:[100], border:2} },
//     "lorem"

//   );

//   return newNote;
// };

// allNotes.appendChild(newNote);

// export function newNote() {
//     createNote();
// }

function Note() {
  const rootElement = document.getElementById("addNote");

  const createNote = () => useCallback(() => {
    const newNote = React.createElement(
      "h1",
      { className: "container", id: "main-container" },
      "click here"
    );

    createRoot(rootElement).render(newNote);
  }, []);


  useEffect(() => {
    createNote();
  }, []);

  return (
    <>
      <main className="border mx-5 mb-5 px-1 ">
        <h3>Recent Notes</h3>

        {/* Section where all the notes will be added, shown etc */}
        <section id="addNote" className=""></section>
      </main>
    </>
  );
}

export default Note;
// export default createNote();
export function newNote() {
  createNote();
}

