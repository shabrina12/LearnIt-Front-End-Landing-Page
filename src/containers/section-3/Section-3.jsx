import React from 'react'
import {course1, course2, course3, course4, bookIcon, watchIcon} from '../../images';
import SubHeading from '../../components/subHeading/SubHeading';
import './section3.css'

const CourseCard = ({img, category, title, total, time}) => {
    return (
        <div className='course-card'>
            <img src={img} alt='img' />
            <p>{category}</p>
            <h2>{title}</h2>
            <div className='icon-container'>
                <img src={bookIcon} />
                <p>{total}</p>
                <img src={watchIcon} />
                <p>{time}</p>
            </div>
        </div>
    )
}

const Section3 = () => {
  return (
    <section className='section-3'>
        <SubHeading subtitle='COURSE FEATURES' title='Featured Courses' desc='Pursue your interests at your own pace by choosing the course duration, number of lessons per week, and lectures per day' />
        <div className='links-course-container'>
            <ul>
                <li><a href='' className='active'>All Courses</a></li>
                <li><a href=''>Development</a></li>
                <li><a href=''>Photography</a></li>
                <li><a href=''>Design</a></li>
                <li><a href=''>Marketing</a></li>
                <li><a href=''>Music</a></li>
                <li><a href=''>Business</a></li>
            </ul>
        </div>
        <div className='container'>
            <div className='courses-container'>
                <CourseCard img={course4} category='Photography' title='Capture like a Pro Masterclass' total='103 Lessons ' time='6h 25min' />
                <CourseCard img={course3} category='Business' title='Customer Service Training' total='35 Lessons' time='1h 30min' />
                <CourseCard img={course2} category='Design' title='Become a UX Designer The Ultimate Guide' total='75 Lessons' time='8h 32min' />
                <CourseCard img={course1} category='Music' title='Complete Guitar Lessons' total='102 Lessons' time='19h 30min' />
                <CourseCard img={course4} category='Photography' title='Capture like a Pro Masterclass' total='103 Lessons ' time='6h 25min' />
                <CourseCard img={course3} category='Business' title='Customer Service Training' total='35 Lessons' time='1h 30min' />
                <CourseCard img={course2} category='Design' title='Become a UX Designer The Ultimate Guide' total='75 Lessons' time='8h 32min' />
                <CourseCard img={course1} category='Music' title='Complete Guitar Lessons' total='102 Lessons' time='19h 30min' />
            </div>
            <button type='button'>See All</button> 
        </div>
    </section>
  )
}

export default Section3