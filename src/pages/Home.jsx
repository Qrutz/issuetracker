import React from 'react';
import NavbarOne from '../components/Navbar/NavbarOne';
import NavbarTwo from '../components/Navbar/NavbarTwo';
import TicketListNotStartedComponent from '../components/TicketLists/TicketListNotStartedComponent';
import TicketListInProgressComponent from '../components/TicketLists/TicketListInProgressComponent';
import TicketListClosedComponent from '../components/TicketLists/TicketListClosedComponent';
import TicketListTestComponent from "../components/TicketLists/TicketListTestComponent";

export default function Home() {

  
  
  
 
 





  
  


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
