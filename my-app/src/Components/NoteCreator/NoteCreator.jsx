import "./NoteCreator.css";
import NotesList from "../NotesList/NotesList";
import { useState } from "react";
import moment from "moment";

export function NoteCreator() {
  const [note, setNote] = useState({ title: "", text: "" });
  function handleChangeText(event) {
    const date = moment().format("MMM Do h:mm A");
    setNote({ ...note, text: event.target.value, date: date });
  }
  function handleChangeTitle(event) {
    setNote({ ...note, title: event.target.value });
  }
  const [list, setList] = useState([note]);

  function addNote() {
    if (note.text !== "") {
      if (list[0].text === "") {
        list.splice(0, 1);
      }
      console.log(note);
      const newList = list.concat(note);
      setList(newList);
      setNote({ title: "", text: "" });
    }
  }

  function deleteNote(noteId) {
    if (confirm("Are you sure you want to delete your note?") === true) {
      const newList = list.filter((_, id) => id !== noteId);
      if (newList.length === 0) {
        setList([{ text: "" }]);
      } else {
        setList(newList);
      }
    }
  }

  //   console.log(list);
  return (
    <div className="NoteCreator">
      <div className="NoteCreatorInput">
        <div className="noteCreatorContainer">
          <input
            id="title-input"
            onChange={(e) => handleChangeTitle(e)}
            value={note.title}
            placeholder="Title"
          />
          <textarea
            id="text-input"
            onChange={(e) => handleChangeText(e)}
            value={note.text}
            placeholder="Your note..."
          />
          <button className="addNoteButton" onClick={addNote}>
            Add
          </button>
        </div>
      </div>
      <NotesList listOfNotes={list} onDeleteNote={deleteNote} />
    </div>
  );
}

export default NoteCreator;
