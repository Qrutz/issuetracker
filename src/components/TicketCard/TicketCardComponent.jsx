import { deleteTicket } from "../../Firebase/initialization"
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/usercontext";
import { updateTicket, getMyTickets } from "../../Firebase/initialization";

export default function TicketCardComponent(props) {

  const { CurrentUser } = useContext(UserContext);


 



    function handleClickRemove(e) {
        e.preventDefault();
        deleteTicket(props.ticketID);
        
    }
    function handleClickCheckmark (e) {
        e.preventDefault();
        updateTicket(props.ticketID, CurrentUser);
        console.log("Successfully Assigned to " + CurrentUser.email); 
    }
  

  return (
    <div className='container flex flex-col mt-7 bg-white '>
        <div className='flex justify-between'>
            <h1 className='text-lg font-light ml-8 mt-2'>Ticket #{props.ticketID}</h1>
            <div className="flex flex-col ">     
            <button className="text-3xl font-bold bg-red-700" onClick={handleClickRemove}>X</button>
            <button className="text-3xl font-bold bg-green-700" onClick={handleClickCheckmark}>&#10003;</button>
            </div>
            
            
            
        </div>
        <div>
            <h2 className='text-2xl ml-3 font-bold'>{props.ticketTitle}</h2>
            <p className='mt-2 ml-3 font-light'>{props.ticketDescription}</p>
        </div>
        <div className=' border-t-2 mb-4 ml-3 mt-4 flex justify-between mr-3'>
            <h1 className=' mt-4 font-medium'>{props.createdBy}</h1>
            <p className='mt-4 font-medium'>{props.createdDate}</p>
        </div>
        

    </div>
  )
}
