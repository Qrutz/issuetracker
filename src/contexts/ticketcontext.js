import { createContext, useState, useEffect } from "react";
import { getTickets } from "../Firebase/initialization";

export const TicketContext = createContext({
    Tickets: [],
    setTickets: () => [],
});



export const TicketProvider = ({ children }) => {
    const [Tickets, setTickets] = useState([]);
    const [openTickets, setOpenTickets] = useState([]);
    

    


    useEffect(() => {
        getTickets().then((tickets) => {
            setTickets(tickets);
            setOpenTickets(tickets.filter(ticket => ticket.Status === "Open"));
        });
    }, []);



    
   

    return (
        <TicketContext.Provider value={{ Tickets, setTickets, openTickets, setOpenTickets }}>
            {children}
        </TicketContext.Provider>
    );
}
