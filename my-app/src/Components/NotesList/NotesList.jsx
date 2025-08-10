import "./NotesList.css";
import Note from "../Note/Note";

export function NotesList({ listOfNotes, onDeleteNote, editNote }) {
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
            category={n.category}
            text={n.text}
            date={n.date}
            onDelete={onDeleteNote}
            editNote={editNote}
            noteId={id}
          />
        );
      })}
    </div>
  );
}

export default NotesList;
