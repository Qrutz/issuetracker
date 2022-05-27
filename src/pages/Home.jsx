import React, { useEffect } from 'react';
import NavbarOne from '../components/Navbar/NavbarOne';
import NavbarTwo from '../components/Navbar/NavbarTwo';
import TicketCardComponent from '../components/TicketCard/TicketCardComponent';
import MenusComponent from '../components/Menus/menusComponent';
import { createTicket, getTickets } from '../Firebase/initialization';
import { TicketContext } from '../contexts/ticketcontext';
import TicketListNotStartedComponent from '../components/TicketLists/TicketListNotStartedComponent';
import TicketListInProgressComponent from '../components/TicketLists/TicketListInProgressComponent';
import TicketListClosedComponent from '../components/TicketLists/TicketListClosedComponent';
import TicketListTestComponent from "../components/TicketLists/TicketListTestComponent";

export default function Home() {

  const {Tickets, setTickets} = React.useContext(TicketContext);
  
  

  

 

 





  
  


  return (
    <div className='container mx-auto flex flex-col font-mono'>
        <NavbarOne />
        <NavbarTwo />
        <div className='container  grid grid-cols-4 gap-8'>   
        <TicketListNotStartedComponent  />
        <TicketListInProgressComponent  />
        <TicketListClosedComponent  />
        <TicketListTestComponent  />
        </div>
       

                            
       
        


    </div>
  )
}
