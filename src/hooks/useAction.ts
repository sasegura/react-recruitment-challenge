import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';

import { addTodo, removeTodo, toogleTodo } from '../store/todoSlice';

export const useAction = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleTodoToogle = (id: number) => {
    dispatch(toogleTodo(id));
  };

  const handleAddTodo = (value: string) => {
    dispatch(addTodo(value));
  };

  const handleTodoDone = (id: number) => {
    dispatch(removeTodo(id));
  };

  return { handleTodoToogle, handleAddTodo, handleTodoDone };
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
