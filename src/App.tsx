import { useState } from "react";
import { CategoriesPage } from "./pages/CategoriesPage";
import { AuthorsPage } from "./pages/AuthorsPage";
import { BooksPage } from "./pages/BooksPage";

type Page = "categories" | "authors" | "books";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("categories");

  const navButtonStyle = (page: Page) => ({
    fontWeight: currentPage === page ? "bold" : "normal",
    backgroundColor: currentPage === page ? "#4a90d9" : "#e0e0e0",
    color: currentPage === page ? "white" : "black",
    border: "none",
    padding: "8px 16px",
    borderRadius: 4,
    cursor: "pointer",
  });

  return (
    <div style={{ padding: 20 }}>
      <header style={{ marginBottom: 24 }}>
        <h1>📚 Library Frontend</h1>
        <nav style={{ display: "flex", gap: 12 }}>
          <button
            onClick={() => setCurrentPage("categories")}
            style={navButtonStyle("categories")}
          >
            📂 Categorías
          </button>
          <button
            onClick={() => setCurrentPage("authors")}
            style={navButtonStyle("authors")}
          >
            ✍️ Autores
          </button>
          <button
            onClick={() => setCurrentPage("books")}
            style={navButtonStyle("books")}
          >
            📖 Libros
          </button>
        </nav>
      </header>

      <main>
        {currentPage === "categories" && <CategoriesPage />}
        {currentPage === "authors" && <AuthorsPage />}
        {currentPage === "books" && <BooksPage />}
      </main>
    </div>
  );
}

export default App;
