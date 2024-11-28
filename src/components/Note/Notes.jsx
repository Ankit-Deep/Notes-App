import React, { act, useEffect, useRef, useState } from "react";

function Notes() {
  const [notesList, setNotesList] = useState([]);

  // Load saved notes from localStorage when the component mounts (Done with ChatGPT help)
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotesList(savedNotes);
  }, []);

  // Function to create new notes component whenever button is clicked (Done with ChatGPT help)
  const createNewNote = () => {
    const newNote = { id: Date.now(), content: "" };
    setNotesList((prevNotes) => [...prevNotes, newNote]);
  };
  
  // Function to add Notes to local stroage : (Done with ChatGPT help)
  const saveNote = (id, content) => {
    const updatedNotes = notesList.map((note) =>
      note.id === id ? { ...note, content } : note
    );
    setNotesList(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Save to localStorage
  };


  // Function to delete a particular note (Done with ChatGPT help)
  const deleteThisNote = (id) => {
    const updatedNotes = notesList.filter((note) => note.id !== id);
    setNotesList(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Update localStorage
  };

  return (
    <>
      <section className="bg-white dark:bg-black text-black dark:text-white w-full flex justify-around py-4 sm:px-6 px-4 gap-4 text-lg ">
        {/* Create New Note Button */}
        <button
          title="Add new Note"
          className="bg-white dark:bg-gray-700 dark:border-gray-400 border w-6/12 text-center py-2 border-1 rounded-lg shadow-sm shadow-black"
          onClick={createNewNote}
        >
          ➕  Note
        </button>

        {/* Search Button */}
        <button
          title="Search a Note"
          className="bg-white dark:bg-gray-700 dark:border-gray-400 border w-6/12 text-center py-2 border-1 rounded-lg shadow-sm shadow-black"
        >
          🔍  Search
        </button>
      </section>

      {/* Section where all the notes will be added */}
      <main className="bg-white dark:bg-black text-black dark:text-white w-full px-4 py-2">
        <h3 className="sm:px-3 px-1">Recent Notes</h3>

        {/* Section where all the notes will be added, shown etc */}
        <section id="addNote" className="">
          <ol
            id="NotesListSection"
            className=" my-2 flex flex-wrap gap-x-5 gap-y-5 justify-center items-center py-2"
          >
            {notesList.map((note) => {
              return (
                <div
                  className="border-black rounded-lg py-3 px-2 w-full sm:w-[32%] h-60 flex flex-col gap-2 justify-between "
                  key={note.id}
                  style={{
                    backgroundColor: "lightblue",
                    borderTopWidth: "5px",
                    borderTopColor: "steelblue",
                  }}
                >
                  {/* Div that pops up on clicking more options to change color & copy */}
                  <div className="hidden z-10  border-1 border-black bg-white text-black dark:bg-black dark:text-white w-11/12 rounded-lg ">
                    <div className="flex w-full rounded">
                      <span
                        className="w-8 h-8  rounded"
                        style={{ backgroundColor: "lightblue" }}
                      ></span>
                      <span
                        className="w-8 h-8  rounded"
                        style={{ backgroundColor: "lightgreen" }}
                      ></span>
                      <span
                        className="w-8 h-8  rounded"
                        style={{ backgroundColor: "lightpink" }}
                      ></span>
                      <span
                        className="w-8 h-8  rounded"
                        style={{ backgroundColor: "lightcoral" }}
                      ></span>
                      <span
                        className="w-8 h-8  rounded"
                        style={{ backgroundColor: "lightsalmon" }}
                      ></span>
                      <span
                        className="w-8 h-8  rounded"
                        style={{ backgroundColor: "yellow" }}
                      ></span>
                      <span
                        className="w-8 h-8  rounded"
                        style={{ backgroundColor: "lightslategrey" }}
                      ></span>
                    </div>
                    <div className="border-black border-2 px-2">
                      <i className="fa-solid fa-copy"></i>
                      <span className="px-2 font-semibold text-sm items-center">
                        Copy Note
                      </span>
                    </div>
                  </div>
                  {/*It ends here (pop up div)  */}

                  {/* Top div for 2 main features (more options & Delete) starts */}
                  <div className=" border-black top-section flex  justify-between items-center mb-1 text-lg ">
                    <div className="w-full flex py-1 px-2 justify-between">
                      <i
                        title="more options"
                        id="moreOptions"
                        className="fa-solid fa-ellipsis  cursor-pointer text-gray-600 hover:text-black"
                      ></i>
                      <i
                        title="Delete"
                        id="deleteNote"
                        className="fa-solid fa-trash-can  cursor-pointer text-gray-600 hover:text-black"
                        onClick={() => deleteThisNote(note.id)}
                      ></i>
                    </div>
                  </div>
                  {/* Top div for 2 main features (more options & Delete) ends */}

                  {/* Text area for writing note starts */}
                  <div className=" border-black h-full">
                    <textarea
                      className="px-2 w-full h-full resize-none border-collapse focus:outline-none"
                      placeholder="Type anything to remember..."
                      style={{ backgroundColor: "lightblue", color: "black" }}
                      value={note.content}
                      onChange={(e) => saveNote(note.id, e.target.value)}
                    ></textarea>
                  </div>
                  {/* Text area for writing note starts ends */}

                  {/* Bottom div starts for tick the note & features like (bold, italic, underline etc...) */}
                  <div className=" border-black bottom-section ">
                    <div className="float-right px-2 text-xl cursor-pointer rounded h-full">
                      <button
                        id="saveNote"
                        // onClick={}
                      >
                        <i
                          title="Done/Close"
                          className="fa-solid fa-check text-gray-600 hover:text-black"
                        ></i>
                      </button>
                    </div>
                  </div>
                  {/* Bottom div ends for tick the note & features like (bold, italic, underline etc...) */}
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
