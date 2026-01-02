import { useEffect, useState } from 'react';
import { getCategories, createCategory } from '../api/categories';
import type { Category } from '../api/types';

export function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');

  const load = () => {
    setLoading(true);
    getCategories()
      .then((res) => setCategories(res.data))
      .catch(() => setError('No se pudieron cargar las categorías'))
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
      await createCategory(name.trim());
      setName('');
      load(); // 🔄 refresca la lista
    } catch (err: any) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Categorías</h1>

      <form onSubmit={onSubmit} style={{ marginBottom: 16 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nueva categoría"
        />
        <button type="submit" disabled={creating}>
          {creating ? 'Creando...' : 'Crear'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {categories.length === 0 ? (
        <p>No existen categorías</p>
      ) : (
        <ul>
          {categories.map((c) => (
            <li key={c.id}>{c.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
