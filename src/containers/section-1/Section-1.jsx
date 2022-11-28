import React from 'react';
import {icon1, icon2, icon3} from '../../images';
import SubHeading from '../../components/subHeading/SubHeading';
import './section1.css';

const FeatureCard = ({img, title, desc}) => {
    return (
        <div className='feature-card'>
            <img src={img} alt='img' />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

const Section1 = () => {
  return (
    <section className='section1'>
        <SubHeading subtitle='COURSE FEATURES' title='Best Features' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' />

        <div className='features-container'>
            <FeatureCard img={icon1} title='Expert Instructors' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' />
            <FeatureCard img={icon2} title='Lifetime Access' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' />
            <FeatureCard img={icon3} title='Online Courses' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' />
        </div>
    </section>
  )
}

export default Section1;