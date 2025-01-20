import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'

import Home from './Home.jsx'
import Resume from './Resume.jsx'
import Projects from './Projects.jsx'


function App() {
  
  return (

   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/Working" element={<Projects/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
