import { API_URL } from "./config";
import type { ApiListResponse, Book, CreateBookDto } from "./types";

export async function getBooks(): Promise<ApiListResponse<Book>> {
  const res = await fetch(`${API_URL}/books`);
  if (!res.ok) {
    throw new Error("Error fetching books");
  }
  return res.json();
}

export async function createBook(data: CreateBookDto) {
  const res = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Error creating book");
  }

  return res.json();
}
