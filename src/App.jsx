import "./App.css";
import Counter from "./components/Counter";
import DummyPosts from "./components/DummyPosts";
import TodoList from "./components/TodoList";

function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <span className="app-badge">React Hooks Practice</span>
        <h1>Eksplorasi useState &amp; useEffect</h1>
        <p>Demo interaktif state lokal, list dinamis, dan side-effect</p>
      </header>

      <Counter />
      <TodoList />
      <DummyPosts />
    </main>
  );
}

export default App;