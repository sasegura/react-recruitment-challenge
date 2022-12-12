import { render, screen, RenderResult, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from '../App';
import store from '../store';

const renderAppWhithStore = (): RenderResult =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

describe('useExampleModalHook', () => {
  it('Add Todo item', async () => {
    renderAppWhithStore();
    const initialLength = store.getState().todo.todos.length;

    let titleInput = screen.getByPlaceholderText('Fill before enter');
    expect(titleInput).toBeInTheDocument();
    await waitFor(() => userEvent.type(titleInput, 'Test Title'));
    expect(titleInput).toHaveValue('Test Title');

    let submitButton = screen.getByText('Add');
    await waitFor(() => userEvent.click(submitButton));

    const newTodoLength = store.getState().todo.todos.length;
    expect(newTodoLength).toBeGreaterThan(initialLength);
  });

  it('Delete Todo item', async () => {
    renderAppWhithStore();

    const initialLength = store.getState().todo.todos.length;

    const deleteButton = screen.getAllByLabelText('delete');
    await waitFor(() => userEvent.click(deleteButton[0]));

    const newTodoLength = store.getState().todo.todos.length;
    expect(newTodoLength).toBeLessThan(initialLength);
  });

  it('Toogle Todo item', async () => {
    renderAppWhithStore();

    const initialTodos = store.getState().todo.todos;

    let checkInput = screen.getAllByLabelText('checkbox');
    await waitFor(() => userEvent.click(checkInput[0]));

    const newTodos = store.getState().todo.todos;
    expect(newTodos[0].toogle).toBe(!initialTodos[0].toogle);
  });
});
