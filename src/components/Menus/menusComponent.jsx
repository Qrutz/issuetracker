import React, {useContext} from 'react';
import {TicketContext} from "../../contexts/ticketcontext";

export default function MenusComponent() { 
    const {openTickets, setOpenTickets} = useContext(TicketContext);

    const lengthOfOpenTickets = openTickets.length;
  



  return (
    <div className='justify-center h-12 container flex flex-col mt-4 bg-gray-400 w-1/4'>
            <div className='ml-3'>
                <h1 className='text-2xl text-gray-800'>NOT STARTED ({lengthOfOpenTickets})</h1>
            </div>
    </div>
  )
}
