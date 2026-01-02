import { useEffect, useState } from "react";
import { getAuthors, createAuthor } from "../api/authors";
import type { Author } from "../api/types";

export function AuthorsPage() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");

  const load = () => {
    setLoading(true);
    getAuthors()
      .then((res) => setAuthors(res.data))
      .catch(() => setError("No se pudieron cargar los autores"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      setCreating(true);
      setError(null);
      await createAuthor(name.trim());
      setName("");
      load(); // 🔄 refresca la lista
    } catch (err: any) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  };

  if (loading) return <p>Cargando autores...</p>;

  return (
    <div>
      <h1>✍️ Autores</h1>

      <form
        onSubmit={onSubmit}
        style={{
          marginBottom: 16,
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <label htmlFor="author-name" style={{ fontWeight: 500 }}>
          Nombre del autor:
        </label>
        <input
          id="author-name"
          name="authorName"
          type="text"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej: Gabriel García Márquez..."
        />
        <button type="submit" disabled={creating}>
          {creating ? "Creando..." : "Crear"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {authors.length === 0 ? (
        <p>No existen autores registrados</p>
      ) : (
        <ul>
          {authors.map((a) => (
            <li key={a.id}>👤 {a.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
