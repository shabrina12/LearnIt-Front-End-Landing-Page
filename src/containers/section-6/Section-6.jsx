import React from 'react'
import SubHeading from '../../components/subHeading/SubHeading'
import {profile1, profile2} from '../../images';
import './section6.css'

const Section6 = () => {
  return (
    <section className='section-6'>
        <SubHeading subtitle='OUR BLOG' title='Feature that is amazing' desc='Join a our blog community and share your expertise or niche' />
        <div className='blog-container'>
            <div className='blog-card'>
                <h2>How To Use Business Analysis Tools To Gain an Edge</h2>
                <p>Build the business of your dreams with the skills you already have. Marrying your abilities to this field is</p>
                <div className='profile-container'>
                    <img src={profile1} alt='profile' />
                    <p>Melissa Gallagaher</p>
                </div>
            </div>
            <div className='blog-card'>
                <h2>Create a Business Community as a Graphic Designer</h2>
                <p>The design industry is booming and there’s a high demand for freelance graphic designers, web</p>
                <div className='profile-container'>
                    <img src={profile2} alt='profile' />
                    <p>John Conwell</p>
                </div>
            </div>
        </div>
        <button type='button'>Read More</button>
    </section>
  )
}

export default Section6