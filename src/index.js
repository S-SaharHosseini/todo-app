import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="main">
    <div className="todo-main ">
      <h1>
        Todo <br></br> App
      </h1>
      <div className="todo-wrapper">
        <form>
          <input type="text" placeholder="add new todo..." />
          <button>
            <i className="fi fi-rs-plus"></i>
          </button>
        </form>
        <div className="todo-list-wrapper">
          <div className="todo-list">
            <div className="todo-list-item group">
              <div className="todo-list-item-text">
                <p>first todo for test</p>
              </div>
              <div className="todo-action ">
                <i className="fi fi-rs-trash"></i>
                <i className="fi fi-rs-cross-small"></i>
                <i className="fi fi-rs-check"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="todo-footer"></div>
  </div>
);
