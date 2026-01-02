import { API_URL } from './config';
import type { ApiListResponse, Category } from './types';

export async function getCategories(): Promise<ApiListResponse<Category>> {
  const res = await fetch(`${API_URL}/categories`);
  if (!res.ok) {
    throw new Error('Error fetching categories');
  }
  return res.json();
}

export async function createCategory(name: string) {
  const res = await fetch(`${API_URL}/categories`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Error creating category');
  }

  return res.json();
}
