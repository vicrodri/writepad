export interface Post {
  id: string;
  title: string;
  description: string;
  author: Author;
}

export interface Author {
  name: string;
  id: string;
}

export interface AuthObject {
  authenticated: boolean;
  login: () => void;
  logout: () => void;
}
