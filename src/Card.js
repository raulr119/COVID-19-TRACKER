import React from 'react'
import image from './image 12.png'
import star from './Star 1.png'

function Card() {
  return (
    <div className='card'>
        <img src={image} alt="" />
        <div className="card--stats">
            <img className='card--star' src={star} alt="" />
            <spanc>5.0</spanc>
            <span className='gray'>(6) . </span>
            <span className='gray'>USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p><span className='bold'>From $136</span>  / person</p>
    </div>
  )
}

export default Card