import BookShelf from "../component/book-shelf";
import { CURRENTLY_READING, READ, WANT_TO_READ } from "../constant";
import { Link } from "react-router-dom";

const BookShelfPage = (props) => {
  const getBooksOfShelf = (list, shelf) => {
    return list?.filter((book) => {
      return book.shelf === shelf;
    });
  };
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title={"Currently Reading"}
            books={getBooksOfShelf(props.books, CURRENTLY_READING)}
            updateBook={props.updateBook}
          />
          <BookShelf
            title={"Want to Read"}
            books={getBooksOfShelf(props.books, WANT_TO_READ)}
            updateBook={props.updateBook}
          />
          <BookShelf
            title={"Read"}
            books={getBooksOfShelf(props.books, READ)}
            updateBook={props.updateBook}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};
export default BookShelfPage;
