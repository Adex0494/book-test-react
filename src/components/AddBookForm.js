import { useState } from "react";
import "./AddBookForm.css";

const AddBookForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pageCount, setPageCount] = useState("0");
  const [excerpt, setEXcerpt] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && description && pageCount && excerpt) {
      props.addBook({
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
        <label>Page Count</label>
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
        Add
      </button>
    </form>
  );
};

export default AddBookForm;
