import React from 'react'
import TicketListNotStartedComponent from '../TicketLists/TicketListNotStartedComponent';
import TicketListInProgressComponent from '../TicketLists/TicketListInProgressComponent';
import TicketListClosedComponent from '../TicketLists/TicketListClosedComponent';
import TicketListTestComponent from "../TicketLists/TicketListTestComponent";

export default function HomeDirectory() {
  return (
    <div className='container  grid grid-cols-4 gap-8'>   
        <TicketListNotStartedComponent  />
        <TicketListInProgressComponent  />
        <TicketListClosedComponent  />
        <TicketListTestComponent  />
        </div>
  )
}
