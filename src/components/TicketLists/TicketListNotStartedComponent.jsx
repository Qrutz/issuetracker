import TicketCardComponent from "../TicketCard/TicketCardComponent";
import { useContext} from "react";
import {TicketContext} from "../../contexts/ticketcontext";
import MenusComponent from "../Menus/menusComponent";

export default function TicketListNotStartedComponent() {
    const {openTickets} = useContext(TicketContext);
    
    const len = openTickets.length;
  return (
    <div>
        <MenusComponent lengthOfIssues={len} menuTitle="NOT STARTED"/>
        { openTickets.map(ticket => (
            <TicketCardComponent key={ticket.ticketID} ticketID={ticket.ticketID} ticketTitle={ticket.ticketTitle} ticketDescription={ticket.description} createdBy={ticket.CreatedBy} createdDate={ticket.createdOn} />
        ))}

    </div>
  )
}
