import React from 'react'
import { useState } from 'react'

export default function TicketComponent() {
    const [ticket, setTicket] = useState('TICKET #24850')
    const [ticketTitle, setTicketTitle] = useState('Login page form validation')
    const [ticketDescription, setTicketDescription] = useState('Need to update error validation for login and register')

  return (
    <div className='container flex flex-col mt-7 bg-white w-1/4'>
        <div>
            <h1 className='text-lg font-light ml-8 mt-2'>{ticket}</h1>
        </div>
        <div>
            <h2 className='text-2xl ml-3 font-bold'>{ticketTitle}</h2>
            <p className='mt-2 ml-3 font-light'>{ticketDescription}</p>
        </div>
        <div className=' border-t-2 mb-4 ml-3 mt-4 flex justify-between mr-3'>
            <h1 className=' mt-4 font-medium'>authors</h1>
            <p className='mt-4 font-medium'>20 May 2018</p>
        </div>
        

    </div>
  )
}
