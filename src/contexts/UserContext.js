import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { GlobalContext } from './GlobalContext';

export const UserContext = React.createContext();

export const UserProvider = (props) => {

    const [data, setData] = useState({});
    const [networkError, setNetworkError] = useState(false);
    const { baseUrl } = useContext(GlobalContext)

    useEffect(() => {
        async function getData() {
            const res = await axios
                .get(`${baseUrl}/users/whoisin`, { withCredentials: true })
                .catch(e => setNetworkError(true));
            if (res !== undefined) {
                setData(res.data);
                setNetworkError(false);
            }
        }
        getData();
    }, [baseUrl]);

    const login = async (username, password) => {
        const res = await axios.post(`${baseUrl}/auth/login`, {
            username,
            password
        }, { withCredentials: true });
        setData(res.data);
    }

    const logout = async () => {
        await axios.delete(`${baseUrl}/auth/logout`, { withCredentials: true });
        setData({ username: null });
    }

    const register = async credentials => {
        const res = await axios.post(`${baseUrl}/auth/register`, credentials, { withCredentials: true });
        const dto = res.data;
        if (!!dto.username) {
            setData({ username: dto.username });
        }
    }

    return (
        <UserContext.Provider value={{ ...data, networkError, login, logout, register }}>
            {props.children}
        </UserContext.Provider>
    )

}

