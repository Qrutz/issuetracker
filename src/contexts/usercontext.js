import { createContext, useState, useEffect } from "react";
import {    auth, SignOut, ZonAuthStateChanged, getMyTickets } from "../Firebase/initialization";



export const UserContext = createContext({
    CurrentUser: null,
    setCurrentUser: () => [],
});




export const UserProvider = ({ children }) => {
    const [CurrentUser, setCurrentUser] = useState(null);
    

    

    

    useEffect(() => {
        const status = ZonAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            }

        });
        return status;
    }, []);

    return (
        <UserContext.Provider value={{ CurrentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    );
}