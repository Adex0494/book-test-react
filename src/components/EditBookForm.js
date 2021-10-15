import { useState } from "react";
import "./AddBookForm.css";

const EditBookForm = (props) => {
  const [title, setTitle] = useState(props.book.title);
  const [description, setDescription] = useState(props.book.description);
  const [pageCount, setPageCount] = useState(props.book.pageCount);
  const [excerpt, setEXcerpt] = useState(props.book.excerpt);
  const id = props.book.id;

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && description && pageCount && excerpt) {
      props.editBook({
        title,
        description,
        pageCount,
        excerpt,
        publishDate: new Date(),
        id: 0,
      });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-container">
        <label>{`Id del libro: ${id}`}</label>
      </div>
      <div className="input-container">
        <label>Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </div>
      <div className="input-container">
        <label>Descripción</label>
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
      </div>
      <div className="input-container">
        <label>Número de páginas</label>
        <input
          type="number"
          value={pageCount}
          onChange={(e) => {
            setPageCount(e.target.value);
          }}
        ></input>
      </div>
      <div className="input-container">
        <label>Excerpt</label>
        <input
          type="text"
          value={excerpt}
          onChange={(e) => {
            setEXcerpt(e.target.value);
          }}
        ></input>
      </div>
      <button className="abutton" onClick={submitHandler}>
        Editar
      </button>
    </form>
  );
};

export default EditBookForm;
