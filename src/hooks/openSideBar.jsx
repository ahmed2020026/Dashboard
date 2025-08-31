import { createContext, useContext, useRef, useState } from "react";

const Open = createContext(null);

export const ContextOpen = ({ children }) => {
    const [openMenu, SetOpenMenu] = useState(true);
    const btnRef = useRef(null);
    return <Open.Provider value={{ openMenu, SetOpenMenu, btnRef }}>
        {children}
    </Open.Provider>
}
export const ClickOpenMenu = () => useContext(Open)