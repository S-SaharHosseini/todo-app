import React, { useContext, useState } from "react";
import { TodoContext } from "./todoContext";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const { todoList, setTodoList } = useContext(TodoContext);

  const handleSetTodo = (e) => {
    setTodo(e.target.value);
  };

  const addNewTodo = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodoList([
      ...todoList,
      {
        id: Math.random(),
        title: todo,
        isDone: false,
      },
    ]);
    setTodo("");
  };
  return (
    <form onSubmit={addNewTodo}>
      <input
        type="text"
        placeholder="add new todo..."
        value={todo}
        onChange={handleSetTodo}
      />
      <button>
        <i className="fi fi-rs-plus"></i>
      </button>
    </form>
  );
};
export default AddTodo;
