import "./Note.css";
import { useState } from "react";
import Modal from "react-modal";

export function Note({
  title,
  category,
  text,
  date,
  onDelete,
  editNote,
  noteId,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title || "");
  const [editedCategory, setEditedCategory] = useState(category || "");
  const [editedText, setEditedText] = useState(text || "");

  function openModal() {
    setEditedTitle(title || "");
    setEditedCategory(category || "");
    setEditedText(text || "");
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleDeleteClick(e) {
    e.stopPropagation();
    onDelete(noteId);
  }

  function handleUpdate() {
    editNote(noteId, editedTitle, editedCategory, editedText);
    closeModal();
  }

  return (
    <>
      <div className="Note" onClick={openModal} style={{ cursor: "pointer" }}>
        <div className="NoteContainer">
          <div className="date">{date}</div>
          {title ? <div className="title">{title}</div> : null}
          {category ? <div className="category">{category}</div> : null}
          <div className="text">{text}</div>
        </div>
        <div className="delete" onClick={handleDeleteClick}>
          X
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalNote"
        contentLabel="Note Details"
      >
        <div className="NoteContainer">
          <div className="date">{date}</div>
          <input
            className="titleEditInput"
            onChange={(e) => setEditedTitle(e.target.value)}
            value={editedTitle}
            placeholder="Enter title..."
          />
          <select
            name="category"
            id="category"
            className="categoryEditInput"
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
          >
            <option value="" selected>
              Select a Category
            </option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
            <option value="Other">Other</option>
          </select>
          <input
            className="textEditInput"
            onChange={(e) => setEditedText(e.target.value)}
            value={editedText}
            placeholder="Enter text..."
          />
          <div className="modalButtons">
            <button className="edit" onClick={handleUpdate}>
              Update
            </button>
            <button className="close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default Note;
