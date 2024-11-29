import React, { act, useEffect, useRef, useState } from "react";

function Notes() {
  // State for managing individual Note Bg color change
  const [noteBg, setNoteBg] = useState("lightblue");           

  const [notesList, setNotesList] = useState([]);

  // Load saved notes from localStorage when the component mounts (Done with ChatGPT help)
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotesList(savedNotes);
  }, []);

  // Function to create new notes component whenever button is clicked (Done with ChatGPT help)
  const createNewNote = () => {
    const newNote = { id: Date.now(), content: "", color: noteBg };
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

  // Function to change individual note theme
  const changeNoteColor = (id, e, color) => {
    const div = e.target.parentElement;
    const colorNote = div.parentElement.parentElement.parentElement;
    const colorTextArea = div.parentElement.parentElement.parentElement.children[1].firstChild;
    // console.log("sibling : ", colorTextArea);

    colorNote.style.backgroundColor = color;
    colorTextArea.style.backgroundColor = color;

    // console.log("div id ", colorNote);
  };

  return (
    <>
      <section className="bg-white dark:bg-black text-black dark:text-white w-full flex justify-around py-4 sm:px-6 px-4 gap-4 text-lg ">
        {/* Create New Note Button */}
        <button
          title="Add new Note"
          className="bg-white dark:bg-gray-700 border w-6/12 text-center py-2 border-1 rounded-lg shadow-sm shadow-black dark:border-none dark:shadow-sm dark:shadow-white "
          onClick={createNewNote}
        >
          ➕ Note
        </button>

        {/* Search Button */}
        <button
          title="Search a Note"
          className="bg-white dark:bg-gray-700 border w-6/12 text-center py-2 border-1 rounded-lg shadow-sm shadow-black dark:border-none dark:shadow-sm dark:shadow-white"
        >
          🔍 Search
        </button>
      </section>

      {/* Section where all the notes will be added */}
      <main className="bg-white dark:bg-black text-black dark:text-white w-full px-4 py-2">
        <h3 className="sm:px-3 px-1">Recent Notes</h3>
        <hr className="mx-1 my-4"/>

        {/* Section where all the notes will be added, shown etc */}
        <section id="addNote" className="">
          <ol
            id="NotesListSection"
            className=" my-2 flex flex-wrap gap-x-5 gap-y-5 justify-center items-center py-2"
          >
            {notesList.map((note) => {
              return (
                <div
                  className="rounded-lg py-3 px-2 w-full sm:w-[32%] h-60 flex flex-col gap-2 justify-between border-t-slate-700 dark:border-t-slate-100 shadow-gray-800 shadow-lg dark:shadow-md dark:shadow-gray-200"
                  key={note.id}
                  style={{
                    backgroundColor: `${noteBg}`,
                    borderTopWidth: "5px",
                    // borderTopColor: "black",
                  }}
                >
                  {/* Top div for 2 main features (Note Color Change & Delete) starts */}
                  <div className=" border-black top-section flex  justify-between items-center mb-1 text-xl ">
                    <div className=" w-full flex py-1 px-2 justify-between items-center">
                      <div className="border-black flex gap-2">
                        <span
                          className="w-5 h-5 cursor-pointer rounded-full hover:shadow-lg hover:shadow-gray-400"
                          style={{ backgroundColor: "lightblue" }}
                          onClick={(e) =>
                            changeNoteColor(note.id, e, "lightblue")
                          }
                        ></span>
                        <span
                          className="w-5 h-5 cursor-pointer rounded-full hover:shadow-lg hover:shadow-gray-400"
                          style={{ backgroundColor: "lightgreen" }}
                          onClick={(e) =>
                            changeNoteColor(note.id, e, "lightgreen")
                          }
                        ></span>
                        <span
                          className="w-5 h-5 cursor-pointer rounded-full hover:shadow-lg hover:shadow-gray-400"
                          style={{ backgroundColor: "lightpink" }}
                          onClick={(e) =>
                            changeNoteColor(note.id, e, "lightpink")
                          }
                        ></span>
                        <span
                          className="w-5 h-5 cursor-pointer rounded-full hover:shadow-lg hover:shadow-gray-400"
                          style={{ backgroundColor: "lightcoral" }}
                          onClick={(e) =>
                            changeNoteColor(note.id, e, "lightcoral")
                          }
                        ></span>
                        <span
                          className="w-5 h-5 cursor-pointer rounded-full hover:shadow-lg hover:shadow-gray-400"
                          style={{ backgroundColor: "lightsalmon" }}
                          onClick={(e) =>
                            changeNoteColor(note.id, e, "lightsalmon")
                          }
                        ></span>
                        <span
                          className="w-5 h-5 cursor-pointer rounded-full hover:shadow-lg hover:shadow-gray-400"
                          style={{ backgroundColor: "lightyellow" }}
                          onClick={(e) =>
                            changeNoteColor(note.id, e, "lightyellow")
                          }
                        ></span>
                        <span
                          className="w-5 h-5 cursor-pointer rounded-full hover:shadow-lg hover:shadow-gray-400"
                          style={{ backgroundColor: "lightslategrey" }}
                          onClick={(e) =>
                            changeNoteColor(note.id, e, "lightslategrey")
                          }
                        ></span>
                      </div>
                      <i
                        title="Delete"
                        id="deleteNote"
                        className="fa-solid fa-trash-can  cursor-pointer text-gray-600 hover:text-black"
                        onClick={() => deleteThisNote(note.id)}
                      ></i>
                    </div>
                  </div>
                  {/* Top div for 2 main features (Note Color Change & Delete) ends */}

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
