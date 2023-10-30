import { get } from "../../BooksAPI";
import { useEffect, useState } from "react";
const Book = ({ id, updateBook }) => {
  const [book, setBook] = useState();
  async function getBook(bookId) {
    return await get(bookId);
  }
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      getBook(id).then((value) => {
        setBook(value);
      });
    }
    return () => {
      ignore = true;
    };
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setBook]);

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              book?.imageLinks?.thumbnail &&
              `url(${book.imageLinks.thumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            onChange={(e) => {
              updateBook(book, e.target.value);
            }}
            value={book?.shelf || "none"}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book?.title}</div>
      <div className="book-authors">{book?.authors}</div>
    </div>
  );
};
export default Book;
