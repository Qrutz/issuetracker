import React from 'react'
import { useState } from 'react'

export default function TicketCardComponent(props) {

  return (
    <div className='container flex flex-col mt-7 bg-white w-1/4'>
        <div>
            <h1 className='text-lg font-light ml-8 mt-2'>Ticket #{props.ticketID}</h1>
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
