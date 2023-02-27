import React from "react";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleTodoClick}
      />
      <label>
        {todo.name}
        <select>
          <option>1.0</option>
          <option>1.5</option>
          <option>2.0</option>
          <option>2.5</option>
          <option>3.0</option>
          <option>3.5</option>
          <option>4.0</option>
          <option>4.5</option>
          <option>0</option>
        </select>
        <button>delte</button>
      </label>
    </div>
  );
}
