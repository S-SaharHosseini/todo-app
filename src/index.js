import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="main">
    <div className="h-4/6 w-full todo-main flex justify-center">
      <h1 className="absolute left-10 top-16 text-9xl">Todo <br></br> App</h1>
      <div className="h-screen sm:w-10/12 lg:w-5/12 mt-10 rounded-tl-full rounded-tr-full todo-wrapper"></div>
    </div>
    <div className="h-2/6 w-full todo-footer"></div>
  </div>
);
