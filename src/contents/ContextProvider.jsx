import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    invitaciones: false,
    userProfile:false,
    notificaciones: false,
};

export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        <StateContext.Provider value={{  activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
