import React, {useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userFunction = async() => {
            try{
                setLoading(true);
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setUsers(res.data);
                setError(null);
            } catch(error){
                setError(error.message);
            } finally{
                setLoading(false);
            }
        }
        userFunction();
    },[])

    const userInfo = {
        users,
        loading,error
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;