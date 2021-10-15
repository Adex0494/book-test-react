import logo from "./logo.svg";
import "./App.css";
import "./components/NavButton.js";
import NavButton from "./components/NavButton.js";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import AddBookForm from "./components/AddBookForm";
import FindBook from "./components/FindBook";
import DeleteBook from "./components/DeleteBook";
import FindEditBook from "./components/FindEditBook";
import EditBookForm from "./components/EditBookForm";
import { useState, useReducer } from "react";
import Swal from "sweetalert2";

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
  const [showFindBook, setShowFindBook] = useState(false);
  const [showDeleteBook, setShowDeleteBook] = useState(false);
  const [showFindEditBook, setShowFindEditBook] = useState(false);
  const [showEditBookForm, setShowEditBookForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchAddBook = async (book) => {
    loadingNow();
    try {
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
      Swal.fire("Éxito!", "Libro añadido exitosamente!", "success");
    } catch {
      Swal.fire("Error", "Algo salió mal", "question");
    }
    setLoading(false);
    //console.log(response);
  };

  const loadingNow = () => {
    setLoading(true);
    setShowBookList(false);
    setShowBookDetail(false);
    setShowTheAddBookForm(false);
    setShowFindBook(false);
    setShowDeleteBook(false);
    setShowFindEditBook(false);
    setShowEditBookForm(false);
  };

  const fetchGetBooks = async () => {
    loadingNow();
    try {
      const response = await fetch(
        "https://fakerestapi.azurewebsites.net/api/v1/Books"
      );
      const data = await response.json();
      //console.log(data);

      dispatch({ type: "set books", bookList: data });
      setShowBookList(true);
      setShowBookDetail(false);
      setShowTheAddBookForm(false);
      setShowFindBook(false);
      setShowDeleteBook(false);
      setShowFindEditBook(false);
      setShowEditBookForm(false);
    } catch {
      Swal.fire("Error", "Algo salió mal", "question");
    }
    setLoading(false);
  };

  const fetchABook = async (bookId) => {
    loadingNow();
    try {
      const response = await fetch(
        `https://fakerestapi.azurewebsites.net/api/v1/Books/${bookId}`
      );
      //console.log(response);
      const data = await response.json();
      showBookComponent(data);
    } catch {
      Swal.fire("Error", "Algo salió mal", "question");
    }
    setLoading(false);
  };

  const fetchFindEditBook = async (bookId) => {
    loadingNow();
    try {
      const response = await fetch(
        `https://fakerestapi.azurewebsites.net/api/v1/Books/${bookId}`
      );
      //console.log(response);
      const data = await response.json();
      setBookToShow(data);
      showEditTheBookForm();
    } catch {
      Swal.fire("Error", "Algo salió mal", "question");
    }
    setLoading(false);
  };

  const fetchEditBook = async (book) => {
    loadingNow();
    try {
      const response = await fetch(
        `https://fakerestapi.azurewebsites.net/api/v1/Books/${book.id}`,
        {
          method: "PUT",
          body: JSON.stringify(book),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("llamando");
      Swal.fire("Éxito!", "Libro editado exitosamente!", "success");
    } catch {
      Swal.fire("Error", "Algo salió mal", "question");
    }
    setLoading(false);

    //console.log(response);
  };

  const fetchDeleteBook = async (bookId) => {
    loadingNow();
    try {
      const response = await fetch(
        `https://fakerestapi.azurewebsites.net/api/v1/Books/${bookId}`,
        {
          method: "DELETE",
        }
      );
      Swal.fire("Éxito!", "Libro eliminado exitosamente!", "success");
    } catch {
      Swal.fire("Error", "Algo salió mal", "question");
    }
    setLoading(false);
    //console.log(response);
    //const data = await response.json();
    //console.log(data);
  };

  const showBookComponent = (book) => {
    setBookToShow(book);
    setShowBookDetail(true);
    setShowBookList(false);
    setShowTheAddBookForm(false);
    setShowFindBook(false);
    setShowDeleteBook(false);
    setShowFindEditBook(false);
    setShowEditBookForm(false);
    setLoading(false);
  };

  const showAddBookForm = () => {
    setShowTheAddBookForm(true);
    setShowBookDetail(false);
    setShowBookList(false);
    setShowFindBook(false);
    setShowDeleteBook(false);
    setShowFindEditBook(false);
    setShowEditBookForm(false);
    setLoading(false);
  };

  const showFindTheBook = () => {
    setShowFindBook(true);
    setShowTheAddBookForm(false);
    setShowBookDetail(false);
    setShowBookList(false);
    setShowDeleteBook(false);
    setShowFindEditBook(false);
    setShowEditBookForm(false);
    setLoading(false);
  };

  const showDeleteTheBook = () => {
    setShowDeleteBook(true);
    setShowTheAddBookForm(false);
    setShowBookDetail(false);
    setShowBookList(false);
    setShowFindBook(false);
    setShowFindEditBook(false);
    setShowEditBookForm(false);
    setLoading(false);
  };

  const showFindEditTheBook = () => {
    setShowFindEditBook(true);
    setShowDeleteBook(false);
    setShowTheAddBookForm(false);
    setShowBookDetail(false);
    setShowBookList(false);
    setShowFindBook(false);
    setShowEditBookForm(false);
    setLoading(false);
  };

  const showEditTheBookForm = () => {
    setShowEditBookForm(true);
    setShowTheAddBookForm(false);
    setShowBookDetail(false);
    setShowBookList(false);
    setShowFindBook(false);
    setShowDeleteBook(false);
    setShowFindEditBook(false);
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Nav-container">
          <NavButton
            onClick={() => {
              showAddBookForm();
            }}
            text="Añadir libro"
          ></NavButton>
          <NavButton
            onClick={() => {
              fetchGetBooks();
            }}
            text="Lista de libros"
          ></NavButton>
          <NavButton
            onClick={() => {
              showFindTheBook();
            }}
            text="Buscar un libro"
          ></NavButton>
          <NavButton
            onClick={() => {
              showFindEditTheBook();
            }}
            text="Editar un libro"
          ></NavButton>
          <NavButton
            onClick={() => {
              showDeleteTheBook();
            }}
            text="Borrar un libro"
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

        {showFindBook && <FindBook findBook={fetchABook}></FindBook>}

        {showDeleteBook && (
          <DeleteBook deleteBook={fetchDeleteBook}></DeleteBook>
        )}

        {showFindEditBook && (
          <FindEditBook findEditBook={fetchFindEditBook}></FindEditBook>
        )}

        {showEditBookForm && (
          <EditBookForm
            book={bookToShow}
            editBook={fetchEditBook}
          ></EditBookForm>
        )}

        {loading && <p>Cargando...</p>}
      </header>
    </div>
  );
}

export default App;
