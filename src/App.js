import logo from './logo.svg';
import './App.css';
import {
BrowserRouter as Router,
Route,
Link,
Redirect,
Routes
} from "react-router-dom";
import Posts from './Posts';
import PostsById from './PostsById';

function App() {
  return (
    <Router>
      <Link as={Link} to="/posts">Posts</Link> <hr></hr>
      <Link as={Link} to="/postsbyid">Posts by ID</Link>

      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route path="postsbyid" element={<PostsById />} />
      </Routes>
    </Router>
  );
}

export default App;
