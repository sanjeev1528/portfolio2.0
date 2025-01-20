import React,{useEffect, useState} from 'react'
import { Element } from 'react-scroll';
import {Link} from 'react-router-dom'

function Projects() {
   const [hrs, setHrs] = useState(48);
  useEffect(()=>{
      const interval = setInterval(
        ()=>{
          setHrs((prev)=>
            Math.max(prev-1,0)
          )
        }, 60*60*1000
      );
      return ()=> clearInterval(interval);
  },[])
  
  return (
          //  <Element className="bg-gradient-to-r from-green-200 via-blue-300 to-purple-400 dark:bg-gray-900"style={{minHeight:"100vh"}} name='projects-section'>
          
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 via-blue-300 to-purple-400 dark:bg-gray-900">
              <h1 className='text-center text-4xl font-bold text-red-500'>SoRrY!!!</h1>
      <header className="text-center text-2xl font-bold text-gray-800">
        Working on this page, kindly visit after {hrs}hrs
      </header>
      <Link to={"/"} className='text-center border-gray-500  border-2 rounded-md mt-6 px-2 py-1 shadow-sm shadow-gray-200 hover:bg-slate-50 transition-transform hover:translate-y-[-2px] '> Return to portfolio</Link>
    </div>
            // </Element>
   
  )
}

export default Projects
