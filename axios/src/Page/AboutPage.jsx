import React, { use } from 'react';
import { UserContext } from '../Context/UserContext';
import User from '../components/User/User';

const AboutPage = () => {
    const users = use(UserContext);
    const newUsers = users.users;
    const updateUsers = newUsers.slice(0, 50);

    return (
        <div>
            <h1 className='text-center font-semibold text-4xl'>Users : {updateUsers.length}</h1>
            <div className='container mx-auto grid grid-cols-4 gap-6'>
                {
                    updateUsers.map((user, idx) => <User key={idx} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default AboutPage;