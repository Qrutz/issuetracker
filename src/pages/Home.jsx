import React from 'react';
import NavbarOne from '../components/Navbar/NavbarOne';
import NavbarTwo from '../components/Navbar/NavbarTwo';
import HomeDirectory from '../components/homeDirectory/HomeDirectory';

export default function Home() {


  return (
    <div className='container mx-auto flex flex-col font-mono'>
        <HomeDirectory />
    </div>
  )
}
