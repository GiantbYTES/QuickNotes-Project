import "./NoteCreator.css";
import NotesList from "../NotesList/NotesList";
import { useState } from "react";
import moment from "moment";

export function NoteCreator() {
  const [note, setNote] = useState({ title: "", text: "", category: "" });
  function handleChangeText(event) {
    const date = moment().format("MMM Do h:mm A");
    setNote({ ...note, text: event.target.value, date: date });
  }
  function handleChangeTitle(event) {
    setNote({ ...note, title: event.target.value });
  }
  function handleChangeCategory(event) {
    setNote({ ...note, category: event.target.value });
  }
  const savedList = () => {
    const stored = JSON.parse(localStorage.notesList || "[]");
    return stored.length > 0 ? stored : [{ text: "" }];
  };
  const [list, setList] = useState(savedList());
  function addNote() {
    if (note.text !== "") {
      if (list[0].text === "") {
        list.splice(0, 1);
      }
      const newList = list.concat(note);
      setList(newList);
      setNote({ title: "", text: "", category: "" });
      localStorage.notesList = JSON.stringify(newList);
    }
  }

  function deleteNote(noteId) {
    if (confirm("Are you sure you want to delete your note?") === true) {
      const newList = list.filter((_, id) => id !== noteId);
      if (newList.length === 0) {
        setList([{ text: "" }]);
        localStorage.notesList = JSON.stringify([{ text: "" }]);
      } else {
        setList(newList);
        localStorage.notesList = JSON.stringify(newList);
      }
    }
  }

  function editNote(noteId, newTitle, newCategory, newText) {
    const newList = list.map((note, id) =>
      id === noteId
        ? {
            ...note,
            title: newTitle || "",
            text: newText,
            category: newCategory || "",
          }
        : note
    );
    setList(newList);
    localStorage.notesList = JSON.stringify(newList);
  }

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
          <select
            name="category"
            id="category"
            className="categoryInput"
            value={note.category}
            onChange={(e) => handleChangeCategory(e)}
          >
            <option value="" selected>
              Select a Category
            </option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
            <option value="Other">Other</option>
          </select>
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
      <NotesList
        listOfNotes={list}
        onDeleteNote={deleteNote}
        editNote={editNote}
      />
    </div>
  );
}

export default NoteCreator;
