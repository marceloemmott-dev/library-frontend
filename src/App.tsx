import { useState } from "react";
import { CategoriesPage } from "./pages/CategoriesPage";
import { AuthorsPage } from "./pages/AuthorsPage";

type Page = "categories" | "authors";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("categories");

  return (
    <div style={{ padding: 20 }}>
      <header style={{ marginBottom: 24 }}>
        <h1>📚 Library Frontend</h1>
        <nav style={{ display: "flex", gap: 12 }}>
          <button
            onClick={() => setCurrentPage("categories")}
            style={{
              fontWeight: currentPage === "categories" ? "bold" : "normal",
              backgroundColor:
                currentPage === "categories" ? "#4a90d9" : "#e0e0e0",
              color: currentPage === "categories" ? "white" : "black",
              border: "none",
              padding: "8px 16px",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            📂 Categorías
          </button>
          <button
            onClick={() => setCurrentPage("authors")}
            style={{
              fontWeight: currentPage === "authors" ? "bold" : "normal",
              backgroundColor:
                currentPage === "authors" ? "#4a90d9" : "#e0e0e0",
              color: currentPage === "authors" ? "white" : "black",
              border: "none",
              padding: "8px 16px",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            ✍️ Autores
          </button>
        </nav>
      </header>

      <main>
        {currentPage === "categories" && <CategoriesPage />}
        {currentPage === "authors" && <AuthorsPage />}
      </main>
    </div>
  );
}

export default App;
