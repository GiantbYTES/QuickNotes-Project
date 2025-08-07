import "./NoteCreator.css";
import NotesList from "../NotesList/NotesList";
import { useState } from "react";
import moment from "moment";

export function NoteCreator() {
  const [note, setNote] = useState({ text: "" });
  function handleChange(event) {
    const date = moment().format("MMM Do h:mm A");
    setNote({ ...note, text: event.target.value, date: date });
  }
  const [list, setList] = useState([note]);
  function addNote() {
    if (list[0].text === "") {
      list.splice(0, 1);
    }
    const newList = list.concat(note);
    setList(newList);
    setNote({ text: "" });
  }
  //   console.log(list);
  return (
    <div className="NoteCreator">
      <div className="NoteCreatorInput">
        <div className="noteCreatorContainer">
          <textarea
            id="text-input"
            onChange={(e) => handleChange(e)}
            value={note.text}
            placeholder="Your note..."
          />
          <button className="addNoteButton" onClick={addNote}>
            Add
          </button>
        </div>
      </div>
      <NotesList listOfNotes={list} />
    </div>
  );
}

export default NoteCreator;
