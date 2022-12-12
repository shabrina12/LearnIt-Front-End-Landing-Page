import React, { useState } from 'react'
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
    const [isActive, setIsActive] = useState();

    // function handleClick() {
    //     setIsActive(isActive => !isActive);
    // };

  return (
    <section className='section-3'>
        <SubHeading subtitle='COURSE FEATURES' title='Featured Courses' desc='Pursue your interests at your own pace by choosing the course duration, number of lessons per week, and lectures per day' />
        <div className='links-course-container'>
            <ul>
                <li className='course-btn'><a href='#courses' className={isActive === '#courses'? "active" : null} onClick={()=>setIsActive('#courses')}>All Courses</a></li>
                <li className='course-btn'><a href='#courses' className={isActive === '#courses2'? "active" : null} onClick={()=>setIsActive('#courses2')}>Development</a></li>
                <li className='course-btn'><a href='#courses' className={isActive === '#courses3'? "active" : null} onClick={()=>setIsActive('#courses3')}>Photography</a></li>
                <li className='course-btn'><a href='#courses' className={isActive === '#courses4'? "active" : null} onClick={()=>setIsActive('#courses4')}>Design</a></li>
                <li className='course-btn'><a href='#courses' className={isActive === '#courses5'? "active" : null} onClick={()=>setIsActive('#courses5')}>Marketing</a></li>
                <li className='course-btn'><a href='#courses' className={isActive === '#courses6'? "active" : null} onClick={()=>setIsActive('#courses6')}>Music</a></li>
                <li className='course-btn'><a href='#courses' className={isActive === '#courses7'? "active" : null} onClick={()=>setIsActive('#courses7')}>Business</a></li>
            </ul>
        </div>
        <div className='container'>
            <div className='courses-container' id='courses'>
                {CourseCard}
            </div>
            <button type='button'>See All</button> 
        </div>
    </section>
  )
}

export default Section3