import React, { useContext } from "react";
import notecontext from "../context/notes/noteContext"
import Noteitem from "./Noteitem";

const Notes = () => {
    const context=useContext(notecontext);
  const {notes,setNotes}=context;

  return (
    <div>
      <div className="row-my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <Noteitem note={note}/>;
        })}
      </div>
    </div>
  );
};

export default Notes;
