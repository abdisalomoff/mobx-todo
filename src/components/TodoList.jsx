import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { observer } from "mobx-react";
import todoStore from "../mobx/todo.store";

const TodoList = () => {
  const todoList = todoStore.list;

  return (
    <TableContainer style={{ marginTop: "50px" }} component={Paper}>
      <h2 style={{ marginTop: "10px", marginBottom: "10px", textAlign: "center" }}>Todo List</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Todo Text</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todoList.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.id}</TableCell>
              <TableCell>{todo.text}</TableCell>
              <TableCell>
                <Button> {/* Add Edit functionality here */}</Button>
                <Button onClick={() => todoStore.deleteTodo(todo.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default observer(TodoList);
