import React, { useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import axios from 'axios';

const UserProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    useEffect(() => {
        const userFunction = async() => {
            try{
                setLoading(true);
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setUsers(res.data);
                setError(null);
            }catch(error){
                setError('Something wrong');
                console.log(error);
            } finally{
                setLoading(false);
            }
        }
        userFunction();
    }, [])

    const userInfo ={
        users,
        loading,
        error,
    }

    return (
        <UserContext.Provider value={userInfo} >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;