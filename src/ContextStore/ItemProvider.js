import React, { createContext, useEffect, useState } from 'react';


export const ItemProviderContext = createContext();

const ItemProvider = (props) => {

    const InitialToken = localStorage.getItem('token')
    const [token, setToken] = useState(InitialToken);
    const isLoggegIn = !!token;


    useEffect(() => {
        setTimeout(() => {
            setToken(null);
            localStorage.removeItem('token');
        }, 300000)

    }, [])


    const loginHandler = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    }

    const logoutHandler = () => {
        localStorage.removeItem('token')
        setToken(null)
    }

    const contectValue = {
        token: token,
        isLoggegIn: isLoggegIn,
        login: loginHandler,
        logout: logoutHandler
    }


    return (
        <ItemProviderContext.Provider value={contectValue}>
            {props.children}
        </ItemProviderContext.Provider>
    )
}

export default ItemProvider