import React, { useState} from 'react'

import { createTicket } from '../../Firebase/initialization'

export default function Dropdown() {
    const [ticketTitle, setTicketTitle] = useState('');
    const [ticketDescription, setTicketDescription] = useState('');
    const [ticketUrgency, setTicketUrgency] = useState('');
    const [ticketStatus, setTicketStatus] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault();
        createTicket(ticketTitle, ticketDescription, ticketUrgency, ticketStatus);
        setTicketTitle('');
        setTicketDescription('');
        setTicketUrgency('');
        setTicketStatus('');
    }

    return (   
        <form className='flex flex-col justify-center mt-3  items-center' onSubmit={handleSubmit}>
        <input value={ticketTitle} onChange={(e) => setTicketTitle(e.target.value)} type="text" placeholder='ticket title' required/>
        <input value={ticketDescription} onChange={(e) => setTicketDescription(e.target.value)}  type="text" placeholder='Description' required/>
        <input value={ticketUrgency} onChange={(e) => setTicketUrgency(e.target.value)} type="text" placeholder='Urgency?' required/>
        <input  value={ticketStatus} onChange={(e) => setTicketStatus(e.target.value)} type="text" placeholder='Open / Closed / ...' /> 
        <button className='font-bold   ml-3' type='Submit'>Submit Issue</button>

    </form>
    )
}
