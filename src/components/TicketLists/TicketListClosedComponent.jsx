import TicketCardComponent from "../TicketCard/TicketCardComponent";
import { useContext} from "react";
import {TicketContext} from "../../contexts/ticketcontext";
import MenusComponent from "../Menus/menusComponent";



export default function TicketListClosedComponent() {
    const {closedTickets} = useContext(TicketContext);
   

    const len = closedTickets.length;

    

    

    


  return (
    <div>
        <MenusComponent lengthOfIssues={len} menuTitle="CLOSED" />
        { closedTickets.map(ticket => (
            
            <TicketCardComponent Urgency={ticket.Urgency} key={ticket.ticketID} ticketID={ticket.ticketID} ticketTitle={ticket.ticketTitle} ticketDescription={ticket.description} createdBy={ticket.CreatedBy} createdDate={ticket.createdOn} />
        ))}

    </div>
  )
}
