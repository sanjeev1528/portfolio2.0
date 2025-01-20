import React from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link} from 'react-scroll'
import {Link as ink } from 'react-router-dom'
import App from './App';

function Navbars() {
  return (
<Navbar fluid rounded className='bg-purple-400 p-4 shadow-md shadow-yellow-300'>
 <Avatar alt="User settings" img="/green_pho.jpg" rounded  />

      <Navbar.Toggle />
   
    <Navbar.Collapse>
      <Navbar.Link href="#hero">
      
        <Link
            to="home-section"
            smooth={true}
            duration={1000}
            offset={-70}
            className="nav-link cursor-pointer"
          >Home</Link>
         
          </Navbar.Link>
      <Navbar.Link href="#skills">
      <Link
            to="skills-section"
            smooth={true}
            duration={1000}
            className="nav-link cursor-pointer"
            offset={-70}
          >Skills</Link></Navbar.Link>
    <Navbar.Link href={"/Working"}>
      <ink
            to={"/Working"}
            smooth={true}
             duration={1000}
            className="nav-link cursor-pointer"
             offset={-70}
          >Project</ink></Navbar.Link>

      <Navbar.Link href="#contacts">
      <Link
            to="contact-section"
            smooth={true}
            duration={1000}
            className="nav-link cursor-pointer"
            offset={-70}
          >Contact</Link></Navbar.Link>
    </Navbar.Collapse>
   

  </Navbar>


  )
}

export default Navbars