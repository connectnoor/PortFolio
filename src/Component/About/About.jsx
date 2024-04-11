import React from 'react'
import img from './img7.png'
import img5 from './img5.jpg'
import img2 from './BG3.png'
import BG1 from './background.png'
import './About.css'
import { FaLinkedinIn, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { FaGithub, FaFacebook, FaTwitter, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
const About = () => {
  return (
    <div className='about-container' >
      <h1 id='author' >Published By Author</h1>

      <section className="about">
        <div className="text-content">
          <h1>Noor Amin</h1>
          <div className="unordered-lists">
            <ul id='unordered1' >
              <li className='heading' >About me</li>
              <li className='description' >Hey, I'm Noor Amin, and I'm diving headfirst into the world of React.js! As a newcomer to React, I'm on a mission to blend creativity with functionality, crafting captivating web experiences. Join me as I explore the possibilities, experiment with new ideas, and push the boundaries of what's possible with React.js. Let's embark on this journey together and create something extraordinary!</li>
            </ul>
            <div className="skill-social">

              <ul className='social' >
                <li className='heading' >SKILLS</li>
                <li>< FaHtml5 id='html' />Html</li>
                <li><FaCss3Alt id='css' />Css</li>
                <li><IoLogoJavascript id='js' />Javascript</li>
                <li><FaReact id='react' />React</li>
              </ul>
              <ul className='social' >
                <li className='heading' >Social</li>
                <li className='aligning' ><a target='_blank' href='https://www.linkedin.com/in/noor-amin-a056552a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><span><FaLinkedinIn className='social-icons' id='sIcon1' />&nbsp; Linkdein</span> </a></li>
                <li className='aligning'><a target='_blank' href='https://github.com/connectnoor'>
                  <span><FaGithub className='social-icons' id='sIcon2' />&nbsp; Github</span></a></li>
                <li className='aligning'><a target='_blank' href='https://x.com/Noor_amin01?t=hFMJsA3zE7sJYOEPXv0-Zg&s=09'>
                  <span> <FaTwitter className='social-icons' id='sIcon3' />&nbsp; Twitter</span></a></li>
                <li className='aligning'><a target='_blank' href='https://www.facebook.com/profile.php?id=100055718796660&mibextid=rS40aB7S9Ucbxw6v'><span><FaFacebook className='social-icons' id='sIcon4' />&nbsp; Facebook</span></a></li>
                <li className='aligning'><a target='_blank' href='https://www.instagram.com/connectnooramin?igsh=MWhoMHE4MjR6ejBmNw=='><span><FaInstagram className='social-icons' id='sIcon5' />&nbsp;  Instagram</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
