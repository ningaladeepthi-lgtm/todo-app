import { useState, useEffect } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  // Load tasks from local storage
  const [todos, setTodos] = useState(() => {

    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];

  });

  // Save tasks whenever todos change
  useEffect(() => {

    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );

  }, [todos]);

  // Add new task
  const addTodo = (task) => {

    
    setTodos([
      ...todos,
      { text: task, completed: false }
    ]);

  };

  // Delete task
  const deleteTodo = (index) => {

    const updatedTodos = todos.filter(
      (_, i) => i !== index
    );

    setTodos(updatedTodos);

  };
  const toggleComplete = (index) => {

  const updatedTodos = todos.map(
    (todo, i) =>

      i === index
        ? {
            ...todo,
            completed: !todo.completed
          }
        : todo
  );

  setTodos(updatedTodos);

  };
  const editTodo = (index, newText) => {

  const updatedTodos = todos.map(
    (todo, i) =>

      i === index
        ? { ...todo, text: newText }
        : todo
  );

  setTodos(updatedTodos);

  };

  return (
    <div className="app">

      <h1>To-Do Application</h1>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />

    </div>
  );
  
}

export default App;