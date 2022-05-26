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
    <form className="self-center" onSubmit={handleSubmit}> 
    <div className=" text-center">
        <div className="w-full max-w-lg h-screen ">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-2/4 w-96">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold mt-7">LOGIN</h1>
                    
                    <div className="mb-4">
                        
                        <input onChange={(e) => setUsername(e.target.value)} value={username} className="h-12 mt-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />   

            
                        <input value={password} onChange={(e) => setPassword(e.target.value) } className="h-12 mt-8 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        

                        <div className="flex items-center justify-center mt-2">
                            <button type="submit" value='Submit'  className=" h-16 w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                SIGN IN 
                            </button>
                           



                
                </div>
                </div>
                </div>
                </div>
                </div>
                    
    </div>
    </form>
  )
}

