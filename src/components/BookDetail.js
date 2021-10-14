import "./BookDetail.css";

const BookDetail = (props) => {
  return (
    <div>
      <h1>Detalles del libro</h1>
      <h3>Título</h3>
      <p>{props.book.title}</p>
      <h3>Descripción</h3>
      <p>{props.book.description}</p>
      <h3>Excerpt</h3>
      <p>{props.book.excerpt}</p>
      <h3>Page Count</h3>
      <p>{props.book.pageCount}</p>
      <h3>Publish Date</h3>
      <p>{props.book.publishDate}</p>
    </div>
  );
};
export default BookDetail;
