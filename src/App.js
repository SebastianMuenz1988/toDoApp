import "./App.css";

import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  // useState returns an Array
  //--> destructure(usestate[0] = "todo"(default empty array[]) and[1] = "setTodos")
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef(); // useRef hook

  const Local_Storage_Key = "LocalStorageTodos";

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if (storedTodos) setTodos(storedTodos);
    console.log(storedTodos);
  }, []); //depenencies = empty --> Will be only called once!

  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(todos));
  }, [todos]); //dependencies= todos (call when depenencies change)

  function toggleTodo(id) {
    const copyTodos = [...todos]; // always make a copy if you wanna change sth
    const todo = copyTodos.find((todo) => todo.id === id); // find object
    todo.complete = !todo.complete; //
    // setTodos(copyTodos);
    handleClearTodos(copyTodos);
  }

  function handleClearTodos(copyTodos) {
    const newTodos = copyTodos.filter((todo) => todo.complete === false);
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevt) => {
      return [
        ...prevt,
        { id: uuidv4(), name: name, hours: 1.0, complete: false },
      ];
    });
    todoNameRef.current.value = null; //clear input element
  }

  function total(arr) {
    let total = 0;
    arr.forEach((item) => {
      total += item.hours;
      console.dir(item.hours);
    });

    return total;
  }

  function clearTodos(e) {
    setTodos([]);
  }

  // use a fragment to return 2 things
  return (
    <>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add new todo</button>
      <button onClick={clearTodos}> Clear todos</button>
      <div>{8 - total(todos)}</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

// All components have props
// We pass them to the components just like html attributes
// todos = prop; todo=varible
export default App;
