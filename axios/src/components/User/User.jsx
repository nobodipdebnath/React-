import React from 'react';

const User = ({user}) => {
    const {id, userId, title, body} = user;
    return (
        <div className='p-5 border rounded-xl'>
            <h1>id : {id}</h1>
            <h2>User Id : {userId}</h2>
            <h3>{title}</h3>
            <h4>{body}</h4>
        </div>
    );
};

export default User;