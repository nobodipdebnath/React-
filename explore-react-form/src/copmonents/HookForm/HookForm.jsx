import React from 'react'
import useInputField from '../../hooks/useInputField'

export const HookForm = () => {
    const [name, nameOnChange] = useInputField('')
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('')

    const handelSubmit = e =>{
        e.preventDefault();
        console.log('submit', name, email, password);
    }
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input type="text" onChange={nameOnChange} defaultValue={name} />
            <br />
            <input onChange={emailOnChange} defaultValue={email} type="email" name=""/>
            <br />
            <input type="password" onChange={passwordOnChange} defaultValue={password} name=""  />
            <br />
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}
