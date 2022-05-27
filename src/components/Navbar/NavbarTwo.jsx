import React from 'react';
import Dropdown from './dropdown';

export default function NavbarTwo() {
  const [toggle, setToggle] = React.useState(false);



  return (
    <div> 
            <nav className=' h-20 bg-slate-50 border-gray-200 px-2 flex justify-between   '>
                  {/*Create a large text in the left corner that says ISSUE TRACKER WITH A DROPDOWN NEXT to it*/}
                 <h2 className='font-mono ml-3 self-center text-5xl tracking-widetracking-wide font-bold'>ISSUE TRACKER</h2>
                 {toggle ? <button onClick={() => setToggle(!toggle)} className='self-center mr-9 font-semibold'>Abort submission</button> : <button onClick={() => setToggle(!toggle)} className='self-center mr-9 font-semibold'>Add an issue</button>}
                 
                  
                  
                      
            </nav>
            { toggle ? <Dropdown /> : null }
        </div>

  )
}
