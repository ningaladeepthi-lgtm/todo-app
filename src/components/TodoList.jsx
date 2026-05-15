import TodoItem from "./TodoItem";

function TodoList({
  todos,
  deleteTodo,
  toggleComplete,
  editTodo
}) {
  return (
    <ul>

      {todos.map((todo, index) => (

        <TodoItem
          key={index}
          todo={todo}
          deleteTodo={() => deleteTodo(index)}
          toggleComplete={() => toggleComplete(index)}
           editTodo={(newText) => editTodo(index, newText)}
        />

      ))}

    </ul>
  );
}

export default TodoList;