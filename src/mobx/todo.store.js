import { makeObservable, observable, action } from "mobx";

class TodoStore {
  list = [];

  constructor() {
    makeObservable(this, {
      list: observable,
      createTodo: action,
      deleteTodo: action,
    });
  }

  createTodo = (todo) => {
    this.list.push(todo);
  };

  deleteTodo = (id) => {
    this.list = this.list.filter((todo) => todo.id !== id);
  };
}

const todoStore = new TodoStore();
export default todoStore;
