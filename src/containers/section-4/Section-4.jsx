import React from 'react'
import {man4, woman4, shape14, shape24} from '../../images';
import SubHeading from '../../components/subHeading/SubHeading';
import './section4.css'

const Section4 = () => {
  return (
    <section className='section-4' id='education'>
        <div className='heading-container'>
            <SubHeading subtitle='EDUCATION' title='Become An Instructor' desc='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna' />
            <button type='button'>Explore</button>
        </div>
        <div className='image-container'>
            <img src={man4} alt='man' />
            <img src={shape24} alt='shape' />
            <img src={woman4} alt='woman' />
        </div>
    </section>
  )
}

export default Section4