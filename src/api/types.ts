export type Category = {
  id: number;
  name: string;
};

export type Author = {
  id: number;
  name: string;
};

export type ApiListResponse<T> = {
  message: string;
  data: T[];
};
