import React, { createContext, useState } from 'react';

export const ItemProviderContext = createContext();

const ItemProvider = (props) => {
    const [token, setToken] = useState([]);
    const [userIsLoggedIn, setuserIsLoggedIn] = useState(false);


    const loginHandler = (token) => {
        setuserIsLoggedIn(true);
        setToken(token);
    }

    const logoutHandler = () => {
        setuserIsLoggedIn(false);
        setToken([])
    }

    const contectValue = {
        token: token,
        isLoggegIn: userIsLoggedIn,
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