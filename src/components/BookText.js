import "./BookText.css";

const BookText = (props) => {
  return (
    <input
      onClick={() => {
        props.showBookComponent(props.book);
      }}
      value={props.book.title}
    ></input>
  );
};

export default BookText;
