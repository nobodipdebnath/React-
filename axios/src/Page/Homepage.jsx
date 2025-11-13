import React, { use } from 'react';
import { UserContext } from '../Context/UserContext';
import User from '../components/User/User';

const Homepage = () => {
    const users = use(UserContext);
    const newUsers = users.users;
    console.log(users)
    return (
        <div>
            <h1 className='text-center font-semibold text-4xl py-2'>Users : {newUsers.length}</h1>
            <div className='container mx-auto grid grid-cols-4 gap-6'>
                {
                    newUsers.map((user, idx) => <User key={idx} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Homepage;