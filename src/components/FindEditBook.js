import "./AddBookForm.css";
import { useState } from "react";

const FindEditBook = (props) => {
  const [id, setId] = useState("1");

  const submitHandler = (e) => {
    e.preventDefault();
    if (id) {
      props.findEditBook(id);
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
        Buscar
      </button>
    </form>
  );
};

export default FindEditBook;
