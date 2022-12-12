import { FormEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { useAction } from '../hooks/useAction';

export const AddForm = () => {
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const { handleAddTodo } = useAction();

  const beforeAddTodo = (input: string) => {
    input ? handleAddTodo(input) : setOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} mb={2}>
          <Typography variant="h2" color="white">
            TODO List
          </Typography>
        </Grid>
      </Grid>
      <Paper sx={{ mb: 2, p: 2 }}>
        <form
          className="App-form"
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            beforeAddTodo(input);
            setInput('');
          }}
        >
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={8} sm={8} md={10}>
              <TextField
                id="standard-basic"
                variant="standard"
                onChange={(e) => setInput((e.target as HTMLInputElement).value)}
                value={input}
                placeholder="Fill before enter"
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={1}>
              <Button type="submit" variant="contained" endIcon={<AddIcon />}>
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="error">Fill input before click 'Add' button!</Alert>
      </Snackbar>
    </Box>
  );
};
