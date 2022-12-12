import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import TodoItem from './components/TodoItem';
import { useAction, useAppSelector } from './hooks/useAction';
import { AddForm } from './components/AddForm';
import { Todo } from './interfaces';

function App() {
  const count = useAppSelector((state: any) => state.todo.count);
  const todos = useAppSelector((state: any) => state.todo.todos);

  const { handleTodoToogle, handleTodoDone } = useAction();

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
        height: '100%',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ padding: '10px', margin: '0 auto' }}>
        <Box sx={{ width: '100%' }}>
          <AddForm />
        </Box>
        <TableContainer component={Paper}>
          {todos.length > 0 &&
            todos.map((todo: Todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                id={todo.id}
                toogle={todo.toogle}
                onCheck={handleTodoToogle}
                onDelete={handleTodoDone}
              />
            ))}
          {count === 0 && <p>No todos</p>}
        </TableContainer>
      </Box>
    </Box>
  );
}

export default App;
