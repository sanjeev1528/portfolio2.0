
import React from 'react'
import Navbars from './Navbar'
import Hero from "./Hero"
import Skills from './Skills'
import './Home.css'
import Contact from './Contact'
import { Element} from 'react-scroll'


function Home() {
  return (
    <>

    <div className='sticky top-0 nav-sk z-10'>
        <Navbars></Navbars>
    </div>


   <div className='screen-sk' >
   <Hero></Hero>
   </div>
    
   <div className='screen-sk' id='skills'>
        <Skills/>
   </div>

   <div className='screen-sk' id="contact">
        <Contact/>
   </div>


   </>
  )
}

export default Home