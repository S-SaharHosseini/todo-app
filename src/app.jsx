import React, { useState } from "react";
import AddTodo from "./addTodo";
import TodoList from "./todoList";
import { TodoContext } from "./todoContext";
const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="main">
      <div className="todo-main ">
        <h1>
          Todo <br></br> App
        </h1>
        <div className="todo-wrapper">
          <TodoContext.Provider value={{ todoList, setTodoList }}>
            <AddTodo />
            <TodoList />
          </TodoContext.Provider>
        </div>
      </div>
      <div className="todo-footer"></div>
    </div>
  );
};

export default App;
