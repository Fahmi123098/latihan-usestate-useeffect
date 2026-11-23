import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // State untuk To-Do List
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const trimmed = task.trim();
    if (!trimmed) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, done: false },
    ]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif", maxWidth: "510px" }}>
      <h1>Latihan React Hooks: useState</h1>

      {/* Bagian 1: Counter */}
      <section style={{ marginBottom: "32px" }}>
        <h2>1. Counter: {count}</h2>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => setCount(count + 1)}>Tambah (+1)</button>
          <button onClick={() => setCount((prev) => Math.max(0, prev - 1))}>
            Kurang (-1)
          </button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>

      <hr />

      {/* Bagian 2: To-Do List */}
      <section style={{ marginTop: "24px" }}>
        <h2>2. To-Do List</h2>

        <form onSubmit={handleAddTodo} style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Tulis tugas baru..."
            style={{ padding: "6px 10px", flex: 1 }}
          />
          <button type="submit">Tambah</button>
        </form>

        {todos.length === 0 ? (
          <p style={{ color: "#666" }}>Belum ada tugas ditambahkan.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
            {todos.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "6px 10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              >
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => toggleTodo(item.id)}
                  />
                  <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
                    {item.text}
                  </span>
                </label>
                <button onClick={() => deleteTodo(item.id)}>Hapus</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;