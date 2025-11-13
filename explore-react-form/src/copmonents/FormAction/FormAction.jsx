import React from 'react'

export const FormAction = () => {
    const handelFormAction = (formData) =>{
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }
  return (
    <div>
        <form action={handelFormAction}>
            <input type="text" name="name" id="" placeholder='Name' />
            <br />
            <input type="email" name="email" id="" placeholder='Email' />
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
