import React from 'react'
import './stats.css'

const Stats = () => {
  return (
        <div className='stats-container'>
            <div className='stats-title-container'>
                <h1>Achievements</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
            <div className='stats-content-container'>
                <div className='stats-content-card'>
                    <h1>2,500</h1>
                    <p>Courses</p>
                </div>
                <div className='stats-content-card'>
                    <h1>50K+</h1>
                    <p>Students</p>
                </div>
                <div className='stats-content-card'>
                    <h1>400+</h1>
                    <p>Instructors</p>
                </div>
            </div>
        </div>
  )
}

export default Stats