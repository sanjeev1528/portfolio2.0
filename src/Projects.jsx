import React,{useEffect, useState} from 'react'
import { Element } from 'react-scroll';

function Projects() {
   const [hrs, setHrs] = useState(50);
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
    </div>
            // </Element>
   
  )
}

export default Projects
