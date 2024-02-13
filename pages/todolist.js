export default function TodoList({
  todos,
  handleClick,
  handleDelete,
  handleDone,
}) {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "8px 12px",
          border: "none",
          borderRadius: "5px",
          marginBottom: "10px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Add Todo
      </button>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.done ? "line-through" : "none",
              padding: "10px",
              borderBottom: "1px solid #ddd",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => handleClick(todo.id)}
          >
            <span style={{ flex: "1" }}>{todo.title}</span>
            <div>
              <button
                style={{
                  backgroundColor: todo.done ? "#4CAF50" : "#008CBA",
                  color: "white",
                  padding: "5px 10px",
                  margin: "0 5px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => handleDone(todo)}
              >
                {todo.done ? "Undo" : "Done"}
              </button>
              <button
                style={{
                  backgroundColor: "#f44336",
                  color: "white",
                  padding: "5px 10px",
                  margin: "0 5px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => handleDelete(todo)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
