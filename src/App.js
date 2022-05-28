import React from 'react';
import LoginPage from "./pages/LoginPage";
import { Routes, Route,  } from 'react-router-dom';
import { UserContext } from './contexts/usercontext';
import Home from './pages/Home';
import Navigation from './components/Navbar/Navigation';
import MyTasks from './pages/myTasks';




export default function App() {
  const { CurrentUser } = React.useContext(UserContext);

  
 
 
  
    
    
  
  // if currentUser is null, redirect to login page else show home page
   function renderPage() {
    if (CurrentUser) {
      return (
        <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='myTasks' element={<MyTasks />} />
        </Route>
      )
             
    } else {
      return <Route path="/" element={<LoginPage /> } />;
    }
  }
 

  
  



  return (
    <Routes>
       {renderPage()}
    </Routes>
  )
}
