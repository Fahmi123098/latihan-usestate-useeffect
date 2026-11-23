import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="card">
      <h2 className="card-title">1. Counter (useState)</h2>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCount(count + 1)}
        >
          Tambah (+1)
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setCount((prev) => Math.max(0, prev - 1))}
        >
          Kurang (-1)
        </button>
        <button
          type="button"
          className="btn btn-reset"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </section>
  );
}

export default Counter;