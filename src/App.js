import React from 'react';
import LoginPage from "./pages/LoginPage";
import { Routes, Route,  } from 'react-router-dom';
import { UserContext } from './contexts/usercontext';
import Home from './pages/Home';



export default function App() {
  const { CurrentUser } = React.useContext(UserContext);

  
 

    
    
  
  // if currentUser is null, redirect to login page else show home page
  function renderPage() {
    if (CurrentUser) {
      return <Route path="/" element={<Home />} />;
    } else {
      return <Route path="/" element={<LoginPage /> } />;
    }
  }
 

  
  



  return (
    <Routes>

     <Route path="/" element={<Home />} /> 
     

    </Routes>
  )
}
