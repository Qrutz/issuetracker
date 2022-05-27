import React, { useEffect } from 'react';
import NavbarOne from '../components/Navbar/NavbarOne';
import NavbarTwo from '../components/Navbar/NavbarTwo';
import TicketCardComponent from '../components/Ticket/TicketCardComponent';
import MenusComponent from '../components/Menus/menusComponent';
import { createTicket, getTickets } from '../Firebase/initialization';
import { TicketContext } from '../contexts/ticketcontext';
import TicketListComponent from '../components/Ticket/TicketListComponent';

export default function Home() {

  const {Tickets, setTickets} = React.useContext(TicketContext);
  
  

  

 

 





  
  


  return (
    <div className='container mx-auto flex flex-col font-mono'>
        <NavbarOne />
        <NavbarTwo />
       
        <TicketListComponent  />

                            
       
        


    </div>
  )
}
