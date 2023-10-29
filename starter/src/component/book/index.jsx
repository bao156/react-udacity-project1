import { CURRENTLY_READING, READ, WANT_TO_READ } from "../../constant";

const Book = ({ book, updateBook }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              book.imageLinks?.thumbnail && `url(${book.imageLinks.thumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            onChange={(e) => {
              updateBook(book, e.target.value);
            }}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option
              value="currentlyReading"
              selected={book.shelf === CURRENTLY_READING}
            >
              Currently Reading
            </option>
            <option value="wantToRead" selected={book.shelf === WANT_TO_READ}>
              Want to Read
            </option>
            <option value="read" selected={book.shelf === READ}>
              Read
            </option>
            <option value="none" selected={!book.shelf}>
              None
            </option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};
export default Book;
