import BookText from "./BookText";
import "./BookList.css";

const BookList = (props) => {
  return (
    <div className="list-container">
      {props.bookListText.map((book) => (
        <BookText
          showBookComponent={props.showBookComponent}
          key={book.id}
          book={book}
        ></BookText>
      ))}
    </div>
  );
};

export default BookList;
