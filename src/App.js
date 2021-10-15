import logo from "./logo.svg";
import "./App.css";
import "./components/NavButton.js";
import NavButton from "./components/NavButton.js";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import AddBookForm from "./components/AddBookForm";
import { useState, useReducer } from "react";

const initialBookState = {
  theBookList: [],
};

const bookReducer = (state, action) => {
  if (action.type === "set books") return { theBookList: action.bookList };
  return initialBookState;
};

function App() {
  const [bookState, dispatch] = useReducer(bookReducer, initialBookState);
  const [showBookDetail, setShowBookDetail] = useState(false);
  const [bookToShow, setBookToShow] = useState({});
  const [showTheAddBookForm, setShowTheAddBookForm] = useState(false);
  const [showBookList, setShowBookList] = useState(false);

  const fetchAddBook = async (book) => {
    const response = await fetch(
      "https://fakerestapi.azurewebsites.net/api/v1/Books",
      {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  };

  const fetchGetBooks = async () => {
    const response = await fetch(
      "https://fakerestapi.azurewebsites.net/api/v1/Books"
    );
    const data = await response.json();
    console.log(data);

    dispatch({ type: "set books", bookList: data });
    setShowBookList(true);
    setShowBookDetail(false);
    setShowTheAddBookForm(false);
  };

  const fetchABook = (bookId) => {};

  const fetchEditBook = (book) => {};

  const fetchDeleteBook = (bookId) => {};

  const showBookComponent = (book) => {
    setBookToShow(book);
    setShowBookDetail(true);
    setShowBookList(false);
    setShowTheAddBookForm(false);
  };

  const showAddBookForm = () => {
    setShowTheAddBookForm(true);
    setShowBookDetail(false);
    setShowBookList(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Nav-container">
          <NavButton
            onClick={() => {
              showAddBookForm();
            }}
            text="Add a book"
          ></NavButton>
          <NavButton
            onClick={() => {
              fetchGetBooks();
            }}
            text="Book list"
          ></NavButton>
          <NavButton
            onClick={() => {
              fetchABook();
            }}
            text="Find a book"
          ></NavButton>
          <NavButton
            onClick={() => {
              fetchEditBook();
            }}
            text="Edit a book"
          ></NavButton>
          <NavButton
            onClick={() => {
              fetchDeleteBook();
            }}
            text="Delete a book"
          ></NavButton>
        </div>

        {showBookList && (
          <BookList
            showBookComponent={showBookComponent}
            bookListText={bookState.theBookList}
          ></BookList>
        )}

        {showBookDetail && <BookDetail book={bookToShow}></BookDetail>}

        {showTheAddBookForm && (
          <AddBookForm addBook={fetchAddBook}></AddBookForm>
        )}
      </header>
    </div>
  );
}

export default App;
