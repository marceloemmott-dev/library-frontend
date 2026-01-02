import { API_URL } from './config';

export async function getCategories() {
  const res = await fetch(`${API_URL}/categories`);

  if (!res.ok) {
    throw new Error('Error fetching categories');
  }

  return res.json();
}
