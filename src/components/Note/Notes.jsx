import React, { act, useEffect, useState } from "react";

function Notes() {
  const [notesList, setNotesList] = useState([]);

  // Function to create new notes component whenever button is clicked
  const createNewNote = () => {
    
    console.log("Ankit");
    
    const newComponent = { id: Date.now() };
    setNotesList([...notesList, newComponent]);

    console.log(notesList);
  };


  // Function to delete a particular note
  const deleteThisNote = (e) => {
    const note = e.target.parentElement;
    const actualNote = note.parentElement.parentElement;

    actualNote.remove();

    // const newList = notesList.filter((item) => item.id === actualNote.id);
    
    console.log(notesList);
    
  }

  return (
    <>
      <section className="bg-white dark:bg-black text-black dark:text-white w-full flex justify-around py-4 px-5 gap-4 text-lg ">
        {/* Create New Note Button */}
        <button
          className="bg-white dark:bg-gray-700 w-6/12 text-center py-2 border-1 rounded-lg shadow-sm shadow-black"
          onClick={createNewNote}
        >
          ➕ Note
        </button>

        {/* Search Button */}
        <button className="bg-white dark:bg-gray-700 w-6/12 text-center py-2 border-1 rounded-lg shadow-sm shadow-black">
          🔍 Search
        </button>
      </section>

      {/* Section where all the notes will be added */}
      <main className="bg-white dark:bg-black text-black dark:text-white w-full px-5 py-5">
        <h3>Recent Notes</h3>

        {/* Section where all the notes will be added, shown etc */}
        <section id="addNote" className="">
          <ol
            id="NotesListSection"
            className="  flex flex-wrap gap-x-10 gap-y-5 justify-center items-center py-2"
          >
            {notesList.map((note) => {
              return (
                <div
                  className="border-2 border-black bg-blue-50 rounded-lg p-2 w-full sm:w-3/12 h-60 flex flex-col justify-between gap-1"
                  key={note.id}
                >
                  <div className="top-section flex  justify-between items-center mb-1 text-lg ">
                    <div className="w-full flex py-1 px-2 justify-between">
                      <i
                        id="moreOptions"
                        className="fa-solid fa-ellipsis  cursor-pointer "
                      ></i>
                      <i
                        id="deleteNote"
                        className="fa-solid fa-trash-can  cursor-pointer "
                        onClick={deleteThisNote}
                      ></i>
                    </div>
                  </div>

                  <div className=" h-full">
                    <textarea
                      className="border w-full h-full resize-none bg-blue-50 border-collapse "
                      name=""
                      id=""
                      
                    ></textarea>
                  </div>

                  <div className="bottom-section border-2 ">
                    <div className="float-right px-2 text-xl cursor-pointer rounded hover:bg-slate-100 h-full">
                      <i className="fa-solid fa-check"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </ol>
        </section>
      </main>
    </>
  );
}

export default Notes;
