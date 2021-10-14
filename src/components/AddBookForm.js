import { useState } from "react";

const AddBookForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pageCount, setPageCount] = useState("0");
  const [excerpt, setEXcerpt] = useState("");

  const submitHandler = () => {
    if (title && description && pageCount && excerpt) {
      props.addBook({
        title,
        description,
        pageCount,
        excerpt,
      });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Descripción</label>
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Page Count</label>
        <input
          type="number"
          value={pageCount}
          onChange={(e) => {
            setPageCount(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Excerpt</label>
        <input
          type="text"
          value={excerpt}
          onChange={(e) => {
            setEXcerpt(e.target.value);
          }}
        ></input>
      </div>
    </form>
  );
};

export default AddBookForm;
