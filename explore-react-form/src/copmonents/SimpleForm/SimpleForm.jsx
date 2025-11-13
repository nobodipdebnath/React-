import React from 'react'

export const SimpleForm = () => {
    const handelSubmit = (event) =>{
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input type="text" placeholder='Your Name' name='name' />
            <br />
            <input type="email" name="email" placeholder='your email' id="" />
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
