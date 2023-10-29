import Book from "../component/book";
import { useState } from "react";
import { search } from "../BooksAPI";
import { Link } from "react-router-dom";
const SearchingBookPage = (props) => {
  const [searchBooks, setSearchBooks] = useState();
  async function searchBook(input) {
    const listOfBook = await search(input);
    setSearchBooks(listOfBook);
  }
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="..\" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => {
              searchBook(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks?.length > 0 &&
            searchBooks.map((book) => {
              return (
                <li key={book.id}>
                  <Book id={book.id} updateBook={props.updateBook} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};
export default SearchingBookPage;
