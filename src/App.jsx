import React, { Fragment } from "react";
import CreateTodo from "./components/createTodo";
import TodoList from "./components/TodoList";
import { Container } from "@mui/material";

export default function App() {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <CreateTodo />
        <TodoList />
      </Container>
    </Fragment>
  );
}
