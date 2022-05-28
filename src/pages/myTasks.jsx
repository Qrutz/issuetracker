import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../contexts/usercontext';
import { getMyTickets } from '../Firebase/initialization';
import TicketCardComponent from '../components/TicketCard/TicketCardComponent';


export default function MyTasks() {
  const [myTasks, setMyTasks] = useState([]);

  const { CurrentUser } = useContext(UserContext);
  

  useEffect(() => {
    getMyTickets(CurrentUser).then((data) => {
        setMyTasks(data);
    });
}, );



  return (
    <div className=' text-center'>
      <h1 className='mt-5 font-bold text-3xl'>My Tasks</h1>
      <div className=' flex justify-around gap-20'>
        {myTasks.map((ticket) => {
          return <TicketCardComponent key={ticket.ticketID} ticketID={ticket.ticketID} ticketTitle={ticket.ticketTitle} ticketDescription={ticket.description} createdBy={ticket.createdBy} createdDate={ticket.createdDate} />
        })}
      </div>
    </div>
  )
}
