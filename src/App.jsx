import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'

import Home from './Home.jsx'
import Resume from './Resume.jsx'


function App() {
  
  return (

   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
