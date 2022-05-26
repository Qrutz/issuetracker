import React, { useState } from "react";
import { SignIn } from "../../Firebase/initialization";




export default function Loginform() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await SignIn(username, password);
            setUsername('');
            setPassword('');
        } catch (error) {
            console.log(error);
        }
    };





  return (
    <div className="relative w-full h-screen">
    <div className="flex justify-center items-center h-full"> 
    <form className="max-w-[400px] w-full mx-auto bg-white p-8 shadow-md rounded " onSubmit={handleSubmit}> 
            <h2 className="text-4xl font-bold text-center py-4">EasyFlow</h2>        
            <div className="flex flex-col mb-4">
               
                    <label>Username</label>
                    <input className="border relative bg-gray-100 p-2" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    
                    <div className="flex flex-col">
                    <label>Password</label>
                    <input className="border relative bg-gray-100 p-2" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white">SIGN IN</button>
                   
                    
                </form>
   
                </div>     
    </div>
    
  )
}

