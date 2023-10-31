import { stat } from 'fs';
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AppState, AppAction } from './Types';

const initialState: AppState = {
  todos: [],
  notes: [],
  cards: [],
  user: {},
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({ state: initialState, dispatch: () => undefined });

const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_TODOS':
      return { ...state, todos: action.payload };
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'UPDATE_TODO':
      const updatedTodos = state.todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
      return { ...state, todos: updatedTodos };
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload] };
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, action.payload] };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => useContext(AppContext);
