import React from 'react';
import NavbarOne from '../components/Navbar/NavbarOne';
import NavbarTwo from '../components/Navbar/NavbarTwo';
import TicketComponent from '../components/Ticket/TicketComponent';
import MenusComponent from '../components/Menus/menusComponent';

export default function Home() {
  return (
    <div className='container mx-auto flex flex-col'>
        <NavbarOne />
        <NavbarTwo />
        <MenusComponent />
        <TicketComponent />

                            
       
        


    </div>
  )
}
