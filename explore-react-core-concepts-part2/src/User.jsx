import React, { useEffect, useState } from 'react'

function User() {
    const[users, setUsers] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(res => setUsers(res))
    }, [])
  return (
    <div>
        <h3>Users : {users.length}</h3>
    </div>
  )
}

export default User