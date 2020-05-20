import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const UserContext = React.createContext();

export const UserProvider = (props) => {

    const [data, setData] = useState({});

    // useEffect(() => async () => {
    //     const res = await axios.get("http://localhost:8080/users/whoisin", { withCredentials: true });
    //     setData(res.data);
    // },[])

    useEffect(() => {
        async function getData() {
          const res = await axios.get("http://localhost:8080/users/whoisin", { withCredentials: true });
          setData(res.data);
        }
        getData();
      }, []);

    // const getUser = async () => {
    //     const res = await axios.get("http://localhost:8080/users/whoisin");
    //     setData(res.data);
    // }

    const login = async (username, password) => {
        const res = await axios.post("http://localhost:8080/auth/login", {
        username,
        password
      },{ withCredentials: true });
      setData(res.data);
    }

    const logout = async () => {
        await axios.delete("http://localhost:8080/auth/logout", { withCredentials: true });
        setData({username: null});
    }



    return (
        <UserContext.Provider value={{ username: data.username, login, logout }}>
            {props.children}
        </UserContext.Provider>
    )

}

