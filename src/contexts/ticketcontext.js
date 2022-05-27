import { createContext, useState, useEffect } from "react";
import { getTickets } from "../Firebase/initialization";

export const TicketContext = createContext({
    Tickets: [],
    setTickets: () => [],
});



export const TicketProvider = ({ children }) => {
    const [Tickets, setTickets] = useState([]);
    const [openTickets, setOpenTickets] = useState([]);
    const [inProgresTickets, setInProgresTickets] = useState([]);
    const [closedTickets, setClosedTickets] = useState([]);
    const [testTickets, setTestTickets] = useState([]);


    


    useEffect(() => {
        getTickets().then((tickets) => {
            setTickets(tickets);
            setOpenTickets(tickets.filter(ticket => ticket.Status === "Open"));
            setInProgresTickets(tickets.filter(ticket => ticket.Status === "In Progress"));
            setClosedTickets(tickets.filter(ticket => ticket.Status === "Closed"));
            setTestTickets(tickets.filter(ticket => ticket.Status === "Test"));
        });
    }, []);



    
   

    return (
        <TicketContext.Provider value={{ Tickets, setTickets, openTickets, setOpenTickets, inProgresTickets, closedTickets, testTickets }}>
            {children}
        </TicketContext.Provider>
    );
}
