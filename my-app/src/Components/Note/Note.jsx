import "./Note.css";
import { useState } from "react";

export function Note({ title, text, date, onDelete, noteId }) {
  return (
    <div className="Note">
      <div className="NoteContainer">
        <div className="date">{date}</div>
        {title ? <div className="title">{title}</div> : null}
        <div className="text">{text}</div>
      </div>
      <div className="delete" onClick={() => onDelete(noteId)}>
        X
      </div>
    </div>
  );
}
export default Note;
