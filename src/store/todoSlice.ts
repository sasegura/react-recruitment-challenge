import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../interfaces';

type initialStateType = {
  todos: Todo[];
};

const todos: Todo[] = [
  {
    id: 1,
    text: 'Christmas basket',
    toogle: false,
  },
  {
    id: 2,
    text: 'Buy Three Kings Day Gift',
    toogle: true,
  },
  {
    id: 3,
    text: 'See the movie "The Lord of the Rings"',
    toogle: false,
  },
];

const initialState: initialStateType = {
  todos,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        text: action.payload,
        toogle: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toogleTodo: (state, action) => {
      const temp: any = state.todos.find((todo) => todo.id === action.payload);
      temp.toogle = !temp.toogle;
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? temp : todo
      );
    },
  },
});

export const { addTodo, removeTodo, toogleTodo } = todoSlice.actions;

export default todoSlice.reducer;
