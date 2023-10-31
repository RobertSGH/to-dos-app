export type Todo = {
  _id: string;
  content: string;
  completed: boolean;
  created_at: Date;
  updated_at: Date;
};

type Attachment = {
  id: string;
  mimeType: string;
  size: number;
  source: 'GridFS';
};

export type Note = {
  id: string;
  description: string;
  created_at: Date;
  updated_at: Date;
};

export type Card = {
  id: string;
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  attachments: Attachment[];
};

export type User = {
  id: string;
  username: string;
  password: string;
  todos: Todo[];
  notes: Note[];
  cards: Card[];
};

export type AppState = {
  todos: Todo[];
  notes: Note[];
  cards: Card[];
  user: User;
};

export type AppAction =
  | { type: 'ADD_TODO'; payload: Todo }
  | { type: 'UPDATE_TODO'; payload: Todo }
  | { type: 'SET_TODOS'; payload: Todo[] }
  | { type: 'ADD_NOTE'; payload: Note }
  | { type: 'ADD_CARD'; payload: Card }
  | { type: 'SET_USER'; payload: User };
