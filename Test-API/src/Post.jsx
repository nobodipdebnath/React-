import React from 'react';

const Post = ({post}) => {
    const {body, id , title, userId}  = post;
    return (
        <div className='p-4 border rounded-xl hover:-translate-y-1.5 cursor-pointer duration-500 hover:shadow-lg'>
            <h2>User Id : {userId}</h2>
            <h3>id : {id}</h3>
            <h4>{title}</h4>
            <h5>{body}</h5>
        </div>
    );
};

export default Post;