
import React,{useState,useEffect} from 'react'

import Navbars from './Navbar'
import Hero from "./Hero"
import Skills from './Skills'
import './Home.css'
import Contact from './Contact'
import { Element} from 'react-scroll'
import Projects from './Projects'
import { motion } from 'framer-motion'

function Home() {
//      const [showDiv, setShowDiv] = useState(true);

//      useEffect(() => {
//          const timer = setTimeout(() => {
//              setShowDiv(false);
//          }, 3000);
//        return () => clearTimeout(timer); // Clean up the timer
//      });
  return (
    <>
       <div>
      {/* { showDiv && <motion.div
            initial={{ opacity: 1, y: 0, height: '100vh'}}
            animate={{ opacity: 0, y: -100,height:'0' }}
            transition={{ duration: 3 }}
            style={{
                backgroundColor: 'black',
                textAlign: 'center',
                position: 'relative',
                height:'100vh'
            }}
        >
            This will vanish!
        </motion.div>} */}

    <div className='sticky top-0 nav-sk z-10'>
        <Navbars></Navbars>
    </div>


   <div id="hero" style={{minHeight:"90vh"}}>
   <Hero></Hero>
   </div>
    
   <div  id='skills' style={{minHeight:"90vh"}}>
        <Skills/>
   </div>

   {/* <div  id="projects" style={{minHeight:"90vh"}}>
        <Projects/>
   </div> */}

   <div  id="contacts" style={{minHeight:"90vh"}}>
        <Contact/>
   </div>

   </div>
   </>
  )
}

export default Home