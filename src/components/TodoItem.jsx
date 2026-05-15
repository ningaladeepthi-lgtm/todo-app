import { useState } from "react";

function TodoItem({
  todo,
  deleteTodo,
  toggleComplete,
  editTodo
}) {

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {

    editTodo(newText);

    setIsEditing(false);

  };

  return (
    <li>

      <div>

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
        />

        {
          isEditing ? (

            <input
              type="text"
              value={newText}
              onChange={(e) =>
                setNewText(e.target.value)
              }
            />

          ) : (

            <span
              style={{
                marginLeft: "10px",
                textDecoration: todo.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {todo.text}
            </span>

          )
        }

      </div>

      <div>

        {
          isEditing ? (

            <button onClick={handleEdit}>
              Save
            </button>

          ) : (

            <button onClick={() => setIsEditing(true)}>
              Edit
            </button>

          )
        }

        <button onClick={deleteTodo}>
          Delete
        </button>

      </div>

    </li>
  );
}

export default TodoItem;