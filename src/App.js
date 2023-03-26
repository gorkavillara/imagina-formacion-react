import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./features/postsSlice";


function App() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  const buscarPosts = () => {
    dispatch(fetchPosts())
  }
  return (
    <div>
      {status === 'loading' && <div>Cargando...</div>}
      {status === 'failed' && <div>{error}</div>}
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button onClick={buscarPosts}>Buscar Posts</button>
    </div>
  );
}

export default App;
