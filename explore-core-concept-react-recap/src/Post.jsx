import { useEffect, useState } from "react";
import Posts from "./Posts";

function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);
  return (
    <div >
      <h3>Posts :{posts.length} </h3>
      {
        posts.map(post => <Posts post={post} ></Posts>)
      }
    </div>
  );
}

export default Post;

/**
 * 1. Create a state to store the data
 * 2. create use effect with no dependencies
 * 3. use fetch to load data
 */
