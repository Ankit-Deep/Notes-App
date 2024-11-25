import React, {
  createElement,
  StrictMode,
  useCallback,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

// Creating individual Note Component
export const createNewNote  = () => {
  console.log('hjwkjsdf');
  
}

function Notes() {
  const rootElement = document.getElementById("addNote");
  // const [components, setComponents] = useState([]);
  // const [counter, setCounter] = useState(1);

  // const createNewNote = () => {
    // const newNote = React.createElement(Note, { className: "new note" });

    // setComponents((prevComponents) => [...prevComponents, newNote])  ;

    // createRoot(document.getElementById("addNote")).render(
    //   <StrictMode>
    //     {/* <Note /> */}
    //   </StrictMode>
    // );
    // console.log("sahdkfw");
    
  // };

  return (
    <>
      <main className="border mx-5 mb-5 px-1 ">
        <h3>Recent Notes</h3>

        {/* Section where all the notes will be added, shown etc */}
        <section id="addNote" className="">
          <h1>Add notes here</h1>
        </section>
      </main>
    </>
  );
}

export default Notes;
