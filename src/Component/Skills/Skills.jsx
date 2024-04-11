import React from 'react'
import './Skills.css'
import { TiHtml5 } from "react-icons/ti";
import { motion } from 'framer-motion';
const Skills = (props) => {
  return (
    <div className='skill-container' >
      <motion.div 
      initial={{
        opacity: 0,
        y: 200,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .5,
        delay: .3,
      }}
      className="skill-icon">
      {props.icon}
      </motion.div>
    </div>
  )
}

export default Skills
