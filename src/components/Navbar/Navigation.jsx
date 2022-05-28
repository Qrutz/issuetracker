import React, {Fragment} from 'react'
import NavbarOne from './NavbarOne';
import NavbarTwo from "./NavbarTwo"
import {Outlet} from 'react-router-dom';



export default function Navigation() {
  return (
    <div className='container mx-auto font-mono'>
    <Fragment>
    <NavbarOne />
    <NavbarTwo />
    <Outlet />
    </Fragment>
    </div>
  )
}
