import "./AddBookForm.css";
import { useState } from "react";

const DeleteBook = (props) => {
  const [id, setId] = useState("1");

  const submitHandler = (e) => {
    e.preventDefault();
    if (id) {
      props.deleteBook(id);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-container">
        <label>Id del libro</label>
        <input
          type="number"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
      </div>
      <button className="abutton" onClick={submitHandler}>
        Eliminar
      </button>
    </form>
  );
};

export default DeleteBook;
