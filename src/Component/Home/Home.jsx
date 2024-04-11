import React from 'react'

import img6 from './img6.jpg'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { motion } from 'framer-motion';


import { Link } from 'react-router-dom'
import './Home.css'
import Skills from '../Skills/Skills'
import Project from '../Project/Project';
const Home = () => {
  return (
    <div id='container' >
      <div className='Home-container' >
        <div className="main">
          <div className="left">
            <div className="text">
              <motion.h1
              initial={{
                opacity: 0,
                x: -300,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                
              }}
              transition={{
                duration: .5,
                delay: .5,         
              }}
              
              >Hi,  I'm <motion.span
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{
                opacity: 1,
                x: 100,
              }}
              transition={{
                duration: .9,
                delay: 1,
              }}
              >Noor Amin</motion.span>
                <br />
                Junior Frontend Engineer</motion.h1>
              <p>HTML | CSS | JAVASCRIPT | REACT JS</p>
            </div>
            <div className="btns">
              <Link to='/contact' ><button>Contact me</button></Link>
              <Link to='about' ><button id='btn2' >About me</button></Link>
            </div>
          </div>

          {/* now here is the right side of the home page */}
          <div className="right">
            <div className="image">
              <img src={img6} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className="portfolio-section">
        <div className="portfolio">
          
             <Project/>
        </div>
        <div className="skills-talk">
          <div className="skills-box">
            <h2>Skills</h2>
            <div className="skills">
              <Skills icon = {<TiHtml5 id='icon1' />} name="HTML" />
              <Skills icon = {<FaCss3Alt id='icon2' />} name="CSS" />
              <Skills icon = {<IoLogoJavascript id='icon3' />} name="Javascript" />
              <Skills icon = {<FaReact id='icon4' />} name="React JS" />
              
              
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Home
