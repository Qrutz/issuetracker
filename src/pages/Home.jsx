import React, { useEffect } from 'react';
import NavbarOne from '../components/Navbar/NavbarOne';
import NavbarTwo from '../components/Navbar/NavbarTwo';
import TicketComponent from '../components/Ticket/TicketComponent';
import MenusComponent from '../components/Menus/menusComponent';
import { createTicket, getTickets } from '../Firebase/initialization';
import { TicketContext } from '../contexts/ticketcontext';

export default function Home() {

  const {Tickets, setTickets} = React.useContext(TicketContext);
  const {openTickets, setOpenTickets} = React.useContext(TicketContext);
  
  

 console.log(Tickets[0].CreatedOn.seconds);

 

  

  




  
  


  return (
    <div className='container mx-auto flex flex-col font-mono'>
        <NavbarOne />
        <NavbarTwo />
        <MenusComponent />
        <TicketComponent />

                            
       
        


    </div>
  )
}
