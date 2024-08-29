import React, { useContext } from "react";
import { TodoContext } from "./todoContext";
const TodoList = () => {
  const { todoList, setTodoList } = useContext(TodoContext);

  const changeTodoStatus = (id) => {
    const index = todoList.findIndex((f) => f.id === id);
    let newTodoList = [...todoList];
    newTodoList[index].isDone = !newTodoList[index].isDone;
    setTodoList(newTodoList);
  };
  const deleteTodo = (id) => {
    let newTodoList = [...todoList];
    newTodoList = newTodoList.filter((f) => f.id !== id);
    setTodoList(newTodoList);
  };

  if (todoList.length > 0) {
    return (
      <div className="todo-list-wrapper">
        <div className="todo-list">
          {todoList.map((t) => (
            <div className="todo-list-item group" key={t.id}>
              <div
                className={`todo-list-item-text  ${
                  t.isDone ? "todo-done" : ""
                }`}
              >
                <p>{t.title}</p>
              </div>
              <div className="todo-action">
                <i
                  className="fi fi-rs-trash"
                  onClick={() => {
                    deleteTodo(t.id);
                  }}
                ></i>

                <i
                  className={`fi ${
                    t.isDone ? "fi-rs-cross-small" : "fi-rs-check"
                  }`}
                  onClick={() => {
                    changeTodoStatus(t.id);
                  }}
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="no-todo">
        <p>No task has been added</p>
      </div>
    );
  }
};
export default TodoList;
