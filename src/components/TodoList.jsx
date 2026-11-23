import { useState } from "react";

function TodoList() {
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
    <section className="card">
      <h2 className="card-title">2. To-Do List (useState Array)</h2>

      <form className="todo-form" onSubmit={handleAddTodo}>
        <input
          type="text"
          className="todo-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Tulis tugas baru..."
        />
        <button type="submit" className="btn btn-primary">
          Tambah
        </button>
      </form>

      {todos.length === 0 ? (
        <p className="status-text">Belum ada tugas ditambahkan.</p>
      ) : (
        <ul className="todo-list">
          {todos.map((item) => (
            <li key={item.id} className="todo-item">
              <label className="todo-label">
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggleTodo(item.id)}
                />
                <span className={item.done ? "todo-done" : ""}>
                  {item.text}
                </span>
              </label>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => deleteTodo(item.id)}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TodoList;