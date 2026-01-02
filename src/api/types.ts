export type Category = {
  id: number;
  name: string;
};

export type Author = {
  id: number;
  name: string;
};

export type Book = {
  id: number;
  title: string;
  author: Author;
  category: Category;
};

export type CreateBookDto = {
  title: string;
  authorId: number;
  categoryId: number;
};

export type ApiListResponse<T> = {
  message: string;
  data: T[];
};
