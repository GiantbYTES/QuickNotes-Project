import "./Note.css";
import { useState } from "react";

export function Note({ text, date, onDelete, noteId }) {
  console.log(date);
  return (
    <div className="Note">
      <div className="NoteContainer">
        <div className="date">{date}</div>
        <div className="text">{text}</div>
      </div>
      <div className="delete" onClick={() => onDelete(noteId)}>
        X
      </div>
    </div>
  );
}
export default Note;
