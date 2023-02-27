import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toggleTodo }) {
  //function component
  return todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
  });
}

//key is for efficency!
