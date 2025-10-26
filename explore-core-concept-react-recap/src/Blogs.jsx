import { useEffect, useState } from "react"
import Blog from "./Blog";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
  return (
    
    <div>
        <h3>Blog : {blogs.length}</h3>
        {
            blogs.map((blog) => <Blog blog={blog}></Blog>)
        }
    </div>
  )
}

export default Blogs