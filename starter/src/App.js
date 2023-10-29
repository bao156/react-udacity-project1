import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookShelfPage from "./pages/main";
import SearchingBookPage from "./pages/searching-book";
import { getAll, update } from "./BooksAPI";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState();

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      getAllBook();
    }
    return () => {
      ignore = true;
    };
  }, [setBooks]);

  async function updateBook(book, shelf) {
    await update(book, shelf);
    await getAllBook();
  }

  async function getAllBook() {
    const allOfBooks = await getAll();
    setBooks(allOfBooks);
  }
  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<BookShelfPage books={books} updateBook={updateBook} />}
        />
        <Route
          exact
          path="/search"
          element={<SearchingBookPage updateBook={updateBook} />}
        />
      </Routes>
    </div>
  );
}

export default App;
