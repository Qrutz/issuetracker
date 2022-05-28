import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../contexts/usercontext';
import {updateProfilee, getMyTickets } from '../Firebase/initialization';


export default function ProfilePage() {

    


  
   const [myTasks, setMyTasks] = useState([]);

  


    const [ProfilePicture, setProfilePicture] = React.useState('https://www.kindpng.com/picc/m/107-1078146_pepe-frog-png-pepe-the-frog-rare-transparent.png');

    const [changing, setChanging] = React.useState(false);

    const [name, setName] = React.useState('');


    const { CurrentUser } = useContext(UserContext);

    useEffect(() => {
        getMyTickets(CurrentUser).then((data) => {
            setMyTasks(data);
        });
    }, );

    



    function handleSubmit(e) {
        e.preventDefault();
        updateProfilee(CurrentUser, { displayName: name });
        setChanging(false);
    }

    
   

    
    const style = changing ? 'hover:border-b-2 hover:border-slate-900' : null

   

    const form = changing ? (<form className='flex flex-col mt-3' >
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="name?" required/> 
    
    </form>) : ( 
    <div className='mt-3 flex flex-col justify-center items-center text-center'> 
    <h2>username: {CurrentUser.displayName}</h2>
    <h2>Email: {CurrentUser.email}</h2>
    </div>
    )

    const e = changing ? (<button className={style} onClick={handleSubmit} type="submit">Submit Changes</button>) : (<button className={style} onClick={() => setChanging(true)}>change username</button>)
    

    const cancelButton = !changing ? null : <button className=' bg-red-700 rounded-full ml-3 mt-2 text-gray-100 font-bold text-2xl w-8' onClick={() => setChanging(false)}>X</button>


    

  return (
      
    <div className='flex flex-col justify-center items-center mt-5'>
        <div className='  '> 
            <h2 className=' text-3xl mb-3 font-bold'>ONGOING TASKS: {myTasks.length}</h2>
        </div>
        <img className='h-48 w-52 rounded-full' src={ProfilePicture} alt="" />
        
        {form}
        <div>
            {e}
            {cancelButton}
        </div>
        

        <div>
            {/*create an h2 that says how many tickets user has solved */}
            <h2 className=' text-4xl mt-4 font-bold'>You have solved: x issues</h2>
        </div>

        
    </div>
  )
}
