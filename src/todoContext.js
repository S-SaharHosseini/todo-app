import { createContext } from "react";

export const TodoContext = createContext({
  todoList: [],
  setTodoList: () => {},
});
