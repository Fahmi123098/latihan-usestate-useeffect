import { useEffect, useState } from "react";

const DUMMY_POSTS = [
  { id: 1, title: "Mengenal useState di React", category: "State" },
  { id: 2, title: "Memahami lifecycle dengan useEffect", category: "Effect" },
  { id: 3, title: "Menyimpan progres ke GitHub", category: "Workflow" },
];

function DummyPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(DUMMY_POSTS);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="card">
      <h2 className="card-title">3. Fetch Data Dummy (useEffect)</h2>

      {loading ? (
        <p className="status-text">Memuat data dummy...</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              <strong>{post.title}</strong>
              <span className="post-badge">{post.category}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default DummyPosts;