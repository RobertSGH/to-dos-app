import { FC } from 'react';
import Notes from './Notes/Notes';
import Todos from './Todos/Todos';

type ComponentType = {
  [key: string]: FC;
};

export const COMPONENTS_MAP: ComponentType = {
  todos: Todos,
  notes: Notes,
};
