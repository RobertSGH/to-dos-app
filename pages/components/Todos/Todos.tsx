import React, { useState, useEffect } from 'react';
import { useAppState } from '@/pages/Context/AppContext';
import { Todo } from '@/pages/Context/Types';
import axios from '@/node_modules/axios/index';
import getFormattedDate from '../helpers';
import usePagination from '@/pages/Hooks/usePagination';

const Todos: React.FC = () => {
  const { state, dispatch } = useAppState();
  const [content, setContent] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const { currentData, jump, currentPage, maxPage } = usePagination(
    state.todos,
    4
  );

  const startEditing = (todo: Todo) => {
    setEditingTodoId(todo._id);
    setEditingContent(todo.content);
  };

  const finishEditing = async () => {
    try {
      const res = await axios.put(`/api/todo/${editingTodoId}`, {
        content: editingContent,
      });
      dispatch({ type: 'UPDATE_TODO', payload: res.data.data });
      setEditingTodoId(null);
      setEditingContent('');
    } catch (error) {
      console.error('An error occurred while editing the todo: ', error);
    }
  };
  const toggleInput = () => {
    setIsInputVisible(!isInputVisible);
  };

  // Fetch todos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/todo');
        dispatch({ type: 'SET_TODOS', payload: res.data.data });
      } catch (error) {
        console.error('An error occurred while fetching data: ', error);
      }
    };
    fetchData();
  }, [dispatch]);

  console.log(state);

  // Add a new todo
  const addTodo = async () => {
    try {
      const res = await axios.post('/api/todo', {
        content,
        completed: false,
        created_at: new Date(),
        updated_at: new Date(),
      });
      dispatch({ type: 'ADD_TODO', payload: res.data.data });
      setContent('');
    } catch (error) {
      console.error('An error occurred while adding a todo: ', error);
    }
  };

  // Update a todo's completed status
  const toggleTodo = async (_id: string, completed: boolean) => {
    try {
      const res = await axios.put(`/api/todo/${_id}`, {
        completed: !completed,
      });
      dispatch({ type: 'UPDATE_TODO', payload: res.data.data });
    } catch (error) {
      console.error('An error occurred while toggling the todo: ', error);
    }
  };

  // Delete a todo
  const deleteTodo = async (_id: string) => {
    try {
      await axios.delete(`/api/todo/${_id}`);
      const filteredTodos = state.todos.filter((todo) => todo._id !== _id);
      dispatch({ type: 'SET_TODOS', payload: filteredTodos });
    } catch (error) {
      console.error('An error occurred while deleting the todo: ', error);
    }
  };

  return (
    <div className='todo-app'>
      <h1 className='todo-title'>To-dos</h1>
      <button className='create-btn' onClick={toggleInput}>
        Create new
      </button>
      {isInputVisible && (
        <div className='input-container'>
          <input
            type='text'
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='todo-input'
          />
          <button onClick={addTodo} className='add-btn'>
            Add
          </button>
        </div>
      )}
      <ul className='todo-list'>
        {currentData().map((todo) => (
          <li key={todo._id} className='todo-item'>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => toggleTodo(todo._id, todo.completed)}
              className='todo-checkbox'
            />

            {editingTodoId === todo._id ? (
              <>
                <input
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                  onBlur={finishEditing}
                  className='edit-input'
                />
                <button onClick={finishEditing} className='save-btn'>
                  Save
                </button>
              </>
            ) : (
              <>
                <div>
                  <span
                    onClick={() => startEditing(todo)}
                    className='editable-text'
                  >
                    {todo.completed ? <s>{todo.content}</s> : todo.content}
                  </span>
                  <div className='date'>
                    {getFormattedDate(todo.created_at)}
                  </div>
                </div>

                <span
                  onClick={() => {
                    if (
                      window.confirm(
                        'Are you sure you want to delete this todo?'
                      )
                    ) {
                      deleteTodo(todo._id);
                    }
                  }}
                  className='delete-icon'
                  title='Delete Todo'
                >
                  🗑️
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => jump(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => jump(currentPage + 1)}
          disabled={currentPage === maxPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Todos;
