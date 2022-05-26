import React, {useState} from 'react';
import {setUser, getUser, createUser, auth, SignIn} from "./Firebase/initialization";
import LoginPage from "./pages/LoginPage";


export default function App() {

    
    SignIn("test@hotmail.com", "password");


  return (
    <div className="App">
     
      <LoginPage />

      
     

    </div>
  )
}
