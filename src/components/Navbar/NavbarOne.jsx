import React from 'react'


export default function NavbarOne() {
  return (
      
            <nav className=' h-20 bg-slate-900 border-gray-200 px-2  py-2.5 flex justify-between'>
                <section className='px-2.5 py-1.5  shadow-md border-md self-center'>
                    <main className='flex items-center justify-between'>
                        <section className="flex items-center space-x-8">
                            <div className="flex items-center space-x-2 ml-8 h-20 w-36 flex-initial">
                                <h2 className=" text-3xl  font-bold text-gray-200 capitalize tracking-wider">EasyFlow</h2>
                            </div>
                            <div className="lg:block hidden flex-initial">
                                <ul className='flex items-center space-x-5'>
                                    <li className=' cursor-pointer active text-gray-200 hover:text-gray-300 text-md capitalize'>
                                        <h2 className=' hover:underline hover:underline-offset-8 px-2 py-2' >Home</h2>
                                    </li>
                                    <li className='cursor-pointer text-gray-200 hover:text-gray-300 text-md capitalize'>
                                        <h2 className=' hover:underline hover:underline-offset-8 px-2 py-2'>Ticket</h2>
                                    </li>
                                    <li className='cursor-pointer text-gray-200 hover:text-gray-300 text-md capitalize'>
                                        <h2 className=' hover:underline hover:underline-offset-8 px-2 py-2'>Task</h2>
                                    </li>
                                    <li className='cursor-pointer text-gray-200 hover:text-gray-300 text-md capitalize'>
                                        <h2 className=' hover:underline hover:underline-offset-8 px-2 py-2'>Workflow</h2>
                                    </li>
                                </ul>
                            </div>
                        </section>

                    </main>

                </section>
                <section className='flex items-center space-x-5 flex-initial mr-5'>
                    {/*create a search bar*/}
                    <input className='bg-gray-200 border-gray-200 border-2 px-2.5 py-1.5   ' type='text' placeholder='Search' />
                
                   


                </section>

                
            </nav>
       

    )
}
