import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { Link, useMatch } from 'react-router-dom';


const Navbar = () => {

  const homeMatch = useMatch('/');
  const aboutMatch = useMatch('/about');
  const contactMatch = useMatch('/contact');

  const [icon, setIcon] = useState(faBars)
  const changeIcon = () => {
    icon === faBars ? setIcon(faXmark) : setIcon(faBars)
  }
  return (
    <div id='nav-background'>
      <nav>
        <NavLink to='/'><h1>Noor &nbsp; Amin</h1></NavLink>
        <ul id='navbar' className={icon === faXmark ? 'active' : ''}>
          <li><Link className={homeMatch ? "red" : ""} to='/'>Home</Link></li>
          <li><Link className={aboutMatch ? "red" : ""} to='/about'>About</Link></li>
          <li><Link className={contactMatch ? "red" : ""} to='/contact'>Contact</Link></li>
        </ul>
        <span id='icon-span'>
          <FontAwesomeIcon onClick={changeIcon} className='icon' icon={icon} />
        </span>
      </nav>
    </div>
  )
}

export default Navbar

// data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsA…fVxeJcxxCDGpYhMGt+Qe+yC4aLLg2xAAAAABJRU5ErkJggg==