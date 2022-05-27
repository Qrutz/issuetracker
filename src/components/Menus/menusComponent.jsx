import React, {useContext} from 'react';
import {TicketContext} from "../../contexts/ticketcontext";

export default function MenusComponent(props) { 
    const {openTickets, setOpenTickets} = useContext(TicketContext);

    const lengthOfOpenTickets = openTickets.length;
  



  return (
    <div className='justify-center  container flex flex-col mt-4 bg-gray-400 '>
            <div className='ml-3'>
                <h1 className='text-2xl text-gray-800'>{props.menuTitle} ({props.lengthOfIssues})</h1>
            </div>
    </div>
  )
}
