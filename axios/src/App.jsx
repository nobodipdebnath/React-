import { use } from 'react'
import './App.css'
import { UserContext } from './Context/UserContext'

function App() {
  const users = use(UserContext);
  const newUser = users.users
  console.log(users.users);
  return (
    <>
      <p>user : {newUser.length}</p>
    </>
  )
}

export default App
