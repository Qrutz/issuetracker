import React, {Fragment} from 'react';
import {Outlet, Link} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/usercontext';
import { SignOut } from '../../Firebase/initialization';


export default function NavbarOne() {
    const {CurrentUser, setCurrentUser} = useContext(UserContext);

    // const CurrentEmail = CurrentUser.providerData[0].email
    const CurrentEmail = CurrentUser ? CurrentUser.email : 'Admin';


    function handleSignOut(e) {
        e.preventDefault();
        try {
            SignOut();
            console.log("Signing out");
            setCurrentUser(null);
        }
        catch (error) {
            console.log(error);
        }
    }


  return (
            <div> 
            <nav className=' h-20 bg-slate-900 border-gray-200 px-2  py-2.5 flex justify-between'>
                <section className='shadow-md border-md self-center'>
                    <main className='flex items-center justify-between'>
                        <section className="flex items-center space-x-8">
                            <div className="flex items-center space-x-2 ml-8 h-20 w-36 flex-initial">
                                <h2 className=" text-3xl  font-bold text-gray-200 capitalize tracking-wider cursor-pointer">EasyFlow</h2>
                            </div>
                            <div className="lg:block hidden flex-initial">
                                <ul className='flex items-center space-x-5'>
                                    <li className=' cursor-pointer active text-gray-200 hover:text-gray-300 text-md capitalize'>
                                        <Link to='/' className='mr-3 text-sm hover:border-b-2 px-2.5 py-1.5 text-gray-200 cursor-pointer' >Home</Link>
                                    </li>
                                    <li className='cursor-pointer text-gray-200 hover:text-gray-300 text-md capitalize'>
                                        <h2 className='mr-3 text-sm hover:border-b-2 px-2.5 py-1.5 text-gray-200 cursor-pointer'>Ticket</h2>
                                    </li>
                                    <li className='cursor-pointer text-gray-200 hover:text-gray-300 text-md capitalize'>
                                        <Link to='myTasks' className='mr-3 text-sm hover:border-b-2 px-2.5 py-1.5 text-gray-200 cursor-pointer'>Task</Link>
                                    </li>
                                    <li className='cursor-pointer text-gray-200 hover:text-gray-300 text-md capitalize'>
                                        <h2 className='mr-3 text-sm hover:border-b-2 px-2.5 py-1.5 text-gray-200 cursor-pointer'>Workflow</h2>
                                    </li>
                                </ul>
                            </div>
                        </section>

                    </main>

                </section>
                <section className='flex items-center space-x-5 flex-initial mr-5'>
                    {/*create a search bar*/}
                    
                   
                    <h2 className='mr-3 text-sm hover:border-b-2 px-2.5 py-1.5 text-gray-200 cursor-pointer'>USER: { CurrentEmail}</h2>
                    <h2 className='mr-3 text-sm hover:border-b-2 px-2.5 py-1.5 text-gray-200 cursor-pointer' onClick={handleSignOut}>LOGOUT</h2>
                
                   


                </section>

                
            </nav>
            
            </div>
   
       

    )
}
