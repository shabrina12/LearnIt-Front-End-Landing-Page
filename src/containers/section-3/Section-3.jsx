import React from 'react'
import {bookIcon, watchIcon} from '../../images';
import SubHeading from '../../components/subHeading/SubHeading';
import Data from './CourseData';
import './section3.css'

const CourseCard = Data.map(item => {
    return (
        <div className='course-card' key={item.id}>
            <img src={item.img} alt='img' />
            <p>{item.category}</p>
            <h2>{item.title}</h2>
            <div className='icon-container'>
                <img src={bookIcon} alt='icon' />
                <p>{item.total}</p>
                <img src={watchIcon} alt='watch' />
                <p>{item.time}</p>
            </div>
        </div>
    )
})

const Section3 = () => {
  return (
    <section className='section-3'>
        <SubHeading subtitle='COURSE FEATURES' title='Featured Courses' desc='Pursue your interests at your own pace by choosing the course duration, number of lessons per week, and lectures per day' />
        <div className='links-course-container'>
            <ul>
                <li><a href='#' className='active'>All Courses</a></li>
                <li><a href='#'>Development</a></li>
                <li><a href='#'>Photography</a></li>
                <li><a href='#'>Design</a></li>
                <li><a href='#'>Marketing</a></li>
                <li><a href='#'>Music</a></li>
                <li><a href='#'>Business</a></li>
            </ul>
        </div>
        <div className='container'>
            <div className='courses-container'>
                {CourseCard}
            </div>
            <button type='button'>See All</button> 
        </div>
    </section>
  )
}

export default Section3