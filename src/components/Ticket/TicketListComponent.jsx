import TicketCardComponent from "../Ticket/TicketCardComponent";
import { useContext} from "react";
import {TicketContext} from "../../contexts/ticketcontext";
import MenusComponent from "../Menus/menusComponent";

export default function TicketListComponent() {
    const {openTickets} = useContext(TicketContext);
  return (
    <div>
        <MenusComponent />
        { openTickets.map(ticket => (
            <TicketCardComponent key={ticket.ticketID} ticketID={ticket.ticketID} ticketTitle={ticket.ticketTitle} ticketDescription={ticket.description} createdBy={ticket.CreatedBy} createdDate={ticket.createdOn} />
        ))}

    </div>
  )
}
