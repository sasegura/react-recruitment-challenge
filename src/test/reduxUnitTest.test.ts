import store from '../store';
import { addTodo, removeTodo, toogleTodo } from '../store/todoSlice';

describe('Redux unit test', () => {
  it('Toogle a item from list with id', () => {
    let state = store.getState().todo;
    const initialBookCount = state.todos[0].toogle;

    store.dispatch(toogleTodo(state.todos[0].id));
    state = store.getState().todo;

    expect(state.todos[0].toogle).toBe(!initialBookCount);
  });

  it('Deletes a item from list with id', () => {
    let state = store.getState().todo;
    const initialBookCount = state.todos.length;

    store.dispatch(removeTodo(1));
    state = store.getState().todo;

    expect(state.todos.length).toBeLessThan(initialBookCount);
  });

  it('Add a item from list with name', () => {
    let state = store.getState().todo;
    const initialBookCount = state.todos.length;

    store.dispatch(addTodo('1'));
    state = store.getState().todo;

    expect(state.todos.length).toBeGreaterThan(initialBookCount);
  });
});
