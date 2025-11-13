import { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";
import Navbar from "./Navbar";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
    <Navbar></Navbar>
      <h1>API Test</h1>
      <p>All Post {posts.length}</p>
      <div className="grid grid-cols-4 gap-6 container mx-auto">
        {posts.map((post, idx) => (
          <Post key={idx} post={post}></Post>
        ))}
      </div>
    </>
  );
}

export default App;
