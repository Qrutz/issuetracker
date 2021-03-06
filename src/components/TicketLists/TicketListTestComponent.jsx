import TicketCardComponent from "../TicketCard/TicketCardComponent";
import { useContext} from "react";
import {TicketContext} from "../../contexts/ticketcontext";
import MenusComponent from "../Menus/menusComponent";



export default function TicketListTestComponent() {
    const {testTickets} = useContext(TicketContext);

    const len = testTickets.length;


  return (
    <div>
        <MenusComponent lengthOfIssues={len} menuTitle="IN TESTING" />
        { testTickets.map(ticket => (
            <TicketCardComponent AssignedTo={ticket.AssignedTo} Urgency={ticket.Urgency} key={ticket.ticketID} ticketID={ticket.ticketID} ticketTitle={ticket.ticketTitle} ticketDescription={ticket.description} createdBy={ticket.CreatedBy} createdDate={ticket.createdOn} />
        ))}

    </div>
  )
}
