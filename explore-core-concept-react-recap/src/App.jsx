import { useState } from 'react'

import './App.css'
import Post from './Post'

function App() {
  return (
    <>

      <h1>React Core Concept Recap</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <hr />
      <Post></Post>
    </>
  )
}

export default App
