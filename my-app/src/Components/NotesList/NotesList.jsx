import "./NotesList.css";
import Note from "../Note/Note";
import { useState } from "react";

export function NotesList({ listOfNotes, onDeleteNote }) {
  //   console.log("list" + listOfNotes);
  if (listOfNotes[0].text === "") {
    return <div className="NotesList"></div>;
  }
  return (
    <div className="NotesList">
      {listOfNotes.map((n, id) => {
        return (
          <Note
            key={id}
            title={n.title}
            text={n.text}
            date={n.date}
            onDelete={onDeleteNote}
            noteId={id}
          />
        );
      })}
    </div>
  );
}

export default NotesList;
