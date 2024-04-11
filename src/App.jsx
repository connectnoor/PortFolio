import React, {useRef, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Skills from './Component/Skills/Skills'
// gsaplibrary

import Footer from './Component/Footer/Footer'
function App() {
  return (
    <BrowserRouter>
    <div className='container' >
      <Navbar  />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about/' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
    <Footer/>
    
    </BrowserRouter>
  )
}

export default App
