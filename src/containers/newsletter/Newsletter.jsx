import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter-container'>
        <h1>Subscribe To Our Newsletter</h1>
        <div className='input-container'>
            <input type='email' placeholder='Enter your email'></input>
            <button type='button'>Get Started</button>
        </div>
    </div>
  )
}

export default Newsletter