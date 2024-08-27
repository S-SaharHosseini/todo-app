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
      <div className="todo-wrapper"></div>
    </div>
    <div className="todo-footer"></div>
  </div>
);
