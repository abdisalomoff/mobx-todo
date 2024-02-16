import { Button, TextField, Box } from "@mui/material";
import { observer } from "mobx-react";
import  { useState } from "react";
import todoStore from "../mobx/todo.store";

const CreateTodo = () => {
  const [todoText, setTodoText] = useState("");

  const handleCreateTodo = (e) => {
    e.preventDefault();

    if (!todoText.trim()) {
      return;
    }

    todoStore.createTodo({ 
      text: todoText, 
      id: todoStore.list.length + 1 });
    setTodoText("");
  };

  return (
    <Box
      display="flex"
      gap={5}
      justifyContent="center"
      marginTop={5}
      sx={{ "& > :not(style)": { width: "35ch" } }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        id="todoInput"
        label="enter a todo"
        variant="standard"
        required
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button
        onClick={handleCreateTodo}
        color="success"
        variant="contained"
        type="submit"
      >
        Add
      </Button>
    </Box>
  );
};

export default observer(CreateTodo);
