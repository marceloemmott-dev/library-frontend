import { useEffect, useState } from "react";
import { getBooks, createBook } from "../api/books";
import { getAuthors } from "../api/authors";
import { getCategories } from "../api/categories";
import type { Book, Author, Category } from "../api/types";

export function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState<number | "">("");
  const [categoryId, setCategoryId] = useState<number | "">("");

  const loadBooks = () => {
    setLoading(true);
    getBooks()
      .then((res) => setBooks(res.data))
      .catch(() => setError("No se pudieron cargar los libros"))
      .finally(() => setLoading(false));
  };

  const loadAuthorsAndCategories = async () => {
    try {
      const [authorsRes, categoriesRes] = await Promise.all([
        getAuthors(),
        getCategories(),
      ]);
      setAuthors(authorsRes.data);
      setCategories(categoriesRes.data);
    } catch {
      setError("Error cargando autores o categorías");
    }
  };

  useEffect(() => {
    loadBooks();
    loadAuthorsAndCategories();
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !authorId || !categoryId) {
      setError("Todos los campos son requeridos");
      return;
    }

    try {
      setCreating(true);
      setError(null);
      await createBook({
        title: title.trim(),
        authorId: Number(authorId),
        categoryId: Number(categoryId),
      });
      setTitle("");
      setAuthorId("");
      setCategoryId("");
      loadBooks(); // 🔄 refresca la lista
    } catch (err: any) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  };

  if (loading) return <p>Cargando libros...</p>;

  return (
    <div>
      <h1>📖 Libros</h1>

      <form onSubmit={onSubmit} style={{ marginBottom: 20 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxWidth: 400,
          }}
        >
          {/* Título */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label htmlFor="book-title" style={{ fontWeight: 500 }}>
              Título del libro:
            </label>
            <input
              id="book-title"
              name="bookTitle"
              type="text"
              autoComplete="off"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej: Cien años de soledad..."
            />
          </div>

          {/* Autor */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label htmlFor="book-author" style={{ fontWeight: 500 }}>
              Autor:
            </label>
            <select
              id="book-author"
              name="bookAuthor"
              value={authorId}
              onChange={(e) =>
                setAuthorId(e.target.value ? Number(e.target.value) : "")
              }
            >
              <option value="">-- Seleccionar autor --</option>
              {authors.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>

          {/* Categoría */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label htmlFor="book-category" style={{ fontWeight: 500 }}>
              Categoría:
            </label>
            <select
              id="book-category"
              name="bookCategory"
              value={categoryId}
              onChange={(e) =>
                setCategoryId(e.target.value ? Number(e.target.value) : "")
              }
            >
              <option value="">-- Seleccionar categoría --</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" disabled={creating} style={{ marginTop: 8 }}>
            {creating ? "Creando..." : "📚 Crear Libro"}
          </button>
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {authors.length === 0 || categories.length === 0 ? (
        <p style={{ color: "orange" }}>
          ⚠️ Necesitas crear al menos un autor y una categoría antes de agregar
          libros.
        </p>
      ) : null}

      {books.length === 0 ? (
        <p>No existen libros registrados</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {books.map((book) => (
            <li
              key={book.id}
              style={{
                padding: 12,
                marginBottom: 8,
                border: "1px solid #ddd",
                borderRadius: 8,
              }}
            >
              <strong>📕 {book.title}</strong>
              <br />
              <small>
                ✍️ {book.author.name} | 📂 {book.category.name}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
