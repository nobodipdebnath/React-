import React, { useState } from 'react'

export const ControlField = () => {

    const [password, SetPassword] = useState('')
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('');

    const handelSubmit = (e) =>{
        e.preventDefault();
        console.log(email, password, name)
        if(password.length < 6){
            setError('6 characters or longer password needed');
        } else{
            setError('')
        }
    }

    const handelPasswordOnChange = (e) =>{
        // console.log(e.target.value);
        SetPassword(e.target.value);
        if(password.length < 6){
            setError('password must be 6 characters ro longer')
        }else{
            setError('');
        }

    }
    const handelEmailChange  = (e) =>{
        setEmail(e.target.value);
    }
    const handelNameChange = (e) => {
        setName(e.target.value);
    }
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input type="text" onChange={handelNameChange} defaultValue={name} name="name" placeholder='Name' id="" />

            <input type="email" onChange={handelEmailChange} defaultValue={email} name="email" placeholder='email' required  />
            <br />
            <input type="password" name='password' placeholder='Password' defaultValue={password} onChange={handelPasswordOnChange} required />
            <br />
            <input type="submit" value="Submit" />
        </form>
        <p style={{color: 'red'}}><small>{error}</small></p>
    </div>
  )
}
