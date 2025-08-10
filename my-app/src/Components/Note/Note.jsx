import "./Note.css";
import { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

export function Note({ title, text, date, onDelete, noteId }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function handleDeleteClick(e) {
    e.stopPropagation();
    onDelete(noteId);
  }
  return (
    <>
      <div className="Note" onClick={openModal} style={{ cursor: "pointer" }}>
        <div className="NoteContainer">
          <div className="date">{date}</div>
          {title ? <div className="title">{title}</div> : null}
          <div className="text">{text}</div>
        </div>
        <div className="delete" onClick={handleDeleteClick}>
          X
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="modalNote"
        contentLabel="Note Details"
      >
        <div className="NoteContainer">
          <div className="date">{date}</div>
          {title ? <div className="title">{title}</div> : null}
          <div className="text">{text}</div>
        </div>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}
export default Note;
