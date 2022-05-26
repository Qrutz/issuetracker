import React from 'react';
import NavbarOne from '../components/Navbar/NavbarOne';
import NavbarTwo from '../components/Navbar/NavbarTwo';
import TicketComponent from '../components/Ticket/TicketComponent';
import MenusComponent from '../components/Menus/menusComponent';
import { createTicket, getTickets } from '../Firebase/initialization';

export default function Home() {


  getTickets();


  return (
    <div className='container mx-auto flex flex-col font-mono'>
        <NavbarOne />
        <NavbarTwo />
        <MenusComponent />
        <TicketComponent />

                            
       
        


    </div>
  )
}
