import Book from "../book";

const BookShelf = ({ title, books, updateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books?.map((book) => {
            return (
              <li key={book.id}>
                <Book id={book.id} updateBook={updateBook} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;
