import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaSquareXTwitter} from "react-icons/fa6";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container' >
        <div className="footer">
            <ul>
                <li><Link to='/'> <h1 id='footer-logo' >Noor Amin</h1></Link></li>
                <li>&copy; 2024 all rights & reserved </li>
            </ul>
            <ul>
                <li><h3 id='quick-links' >Quick Links</h3></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
                
            </ul>
            <ul>
                <li><h3 id='quick-links' >Social Mdeia</h3></li>
                <li><a target='_blank' href='https://github.com/connectnoor'  ><FaGithub id='icons1' /> <span>Github</span> </a ></li>

                <li><a target='_blank' href='https://www.linkedin.com/in/noor-amin-a056552a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'  ><FaLinkedinIn id='icons2' /> <span>LinkDin</span> </a ></li>

                <li><a target='_blank' href='https://x.com/Noor_amin01?t=hFMJsA3zE7sJYOEPXv0-Zg&s=09
'  ><FaTwitter  id='icons3' /> <span>Twitter</span> </a ></li>

                
            </ul>
        </div>
    </div>
  )
}

export default Footer
