import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TodoItem = (props: any) => {
  const deleteTodo = () => {
    props.onDelete(props.id);
  };

  const toogleTodo = () => {
    props.onCheck(props.id);
  };

  const label = { inputProps: { 'aria-label': 'checkbox' } };

  return (
    <Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 60 }}>
              <Checkbox
                {...label}
                checked={props.toogle}
                onChange={toogleTodo}
                role="checkbox"
              />
            </TableCell>
            <TableCell align="left">
              <label>{props.text}</label>
            </TableCell>
            <TableCell style={{ width: 60 }} align="right">
              <IconButton
                onClick={deleteTodo}
                aria-label="delete"
                sx={{ ml: 2 }}
                color="primary"
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </Box>
  );
};

export default TodoItem;
