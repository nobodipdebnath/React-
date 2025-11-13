// AuthProvider.jsx
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFun = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setUsers(res.data);
        setError(null);
      } catch (error) {
        setError("Something Wrong");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFun();
  }, []);

  const userData = {
    users,
    loading,
    error,
  };

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
