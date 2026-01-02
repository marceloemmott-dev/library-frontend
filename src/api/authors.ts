import { API_URL } from "./config";
import type { ApiListResponse, Author } from "./types";

export async function getAuthors(): Promise<ApiListResponse<Author>> {
  const res = await fetch(`${API_URL}/authors`);
  if (!res.ok) {
    throw new Error("Error fetching authors");
  }
  return res.json();
}

export async function createAuthor(name: string) {
  const res = await fetch(`${API_URL}/authors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Error creating author");
  }

  return res.json();
}
