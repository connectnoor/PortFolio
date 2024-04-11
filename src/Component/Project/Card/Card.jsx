import React from 'react'
import './Card.css'


const Card = (props) => {
  return (
    <a 
    
    id='link-tag' target='_blank' href={props.source}>
    <div className='Card-container' >
        
        <div id="image">
          <div className='image-div' >
        <img src={props.image} alt="hello" />
        </div>
        </div>
    </div >
        <h2 className="title">{props.title}</h2>
    </a>
  )
}

export default Card
