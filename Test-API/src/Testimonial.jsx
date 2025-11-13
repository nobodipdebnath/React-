import React from 'react';

const Testimonial = ({user}) => {
    // console.log(user);
    const {id, title, body, userId} = user;
    return (
        <div className='p-5 border rounded-xl bg-secondary text-white'>
            <h2 className=' text-3xl font-semibold '>id : {id}</h2>
            <h3>User Id : {userId}</h3>
            <h4>{title}</h4>
            <h5>{body}</h5>
            <button className='common-button'>View More</button>
        </div>
    );
};

export default Testimonial;