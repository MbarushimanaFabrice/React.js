import React from 'react'
import { } from 'react-icons/fa'
import { IoIosHeartDislike } from 'react-icons/io'
import { } from 'react-icons/ai'
import { } from 'react-icons/bi'
import { } from 'react-icons/bs'
import { } from 'react-icons/cg'
import { } from 'react-icons/fc'
import { } from 'react-icons/fi'
import Me from './Pages/Me'
import Skills from './Pages/Skills'
import Certificate from './Pages/Certificate'
import Addcertificate from './Pages/Addcertificate'
import Projects from './Pages/Projects'
import Addprojects from './Pages/Addprojects'
import About from './Pages/About'
import Container from './Container'
import { Route, Routes } from "react-router-dom"

 
function App() {
  return (
    <>
    <Container />
      {/* <div className="middle">
        <Routes>
          <Route path="/" element={<Me />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificate" element={<Certificate/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
            
        </Routes>
        
      </div> */}
    </>
   )
 }
 export default App
  