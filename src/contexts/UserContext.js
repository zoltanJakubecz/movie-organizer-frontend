import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const UserContext = React.createContext();

export const UserProvider = (props) => {

    const [data, setData] = useState({});

    useEffect(() => {
        async function getData() {
            const res = await axios.get("http://localhost:8080/users/whoisin", { withCredentials: true });
            setData(res.data);
        }
        getData();
    }, []);

    const login = async (username, password) => {
        const res = await axios.post("http://localhost:8080/auth/login", {
            username,
            password
        }, { withCredentials: true });
        setData(res.data);
        console.log(res.data.err)
    }

    const logout = async () => {
        await axios.delete("http://localhost:8080/auth/logout", { withCredentials: true });
        setData({ username: null });
    }

    const register = async credentials => {
        const res = await axios.post("http://localhost:8080/auth/register", credentials, { withCredentials: true });
        const dto = res.data;
        if (!!dto.username) {
            setData({ username: dto.username });
        }
        return dto;
    }

    return (
        <UserContext.Provider value={{ ...data, login, logout, register }}>
            {props.children}
        </UserContext.Provider>
    )

}

