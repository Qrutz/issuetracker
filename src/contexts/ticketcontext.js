import { createContext, useState, useEffect } from "react";
import { getTickets } from "../Firebase/initialization";

export const TicketContext = createContext({
    Tickets: [],
    setTickets: () => [],
});


export const TicketProvider = ({ children }) => {
    const [Tickets, setTickets] = useState([]);


    // useEffect(() => {
    //     const tickets = getTickets();
    //     console.log(tickets);
    // }, []);

    

    return (
        <TicketContext.Provider value={{ Tickets, setTickets }}>
            {children}
        </TicketContext.Provider>
    );
}
