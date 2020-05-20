import React, { useState } from 'react'
import axios from 'axios';

export const UserContext = React.createContext();

export const UserProvider = (props) => {

    const [data, setData] = useState({});

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

