import React from 'react';
import SubHeading from '../../components/subHeading/SubHeading';
import {man, shapes, shapes2, money1, discount, local, money2} from '../../images';
import './section2.css';

const ValueCard = ({img, title, desc}) => {
  return (
    <div className='value-card'>
      <img src={img} alt='img' />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

const Section2 = () => {
  return (
    <section className='section-2'>
        <div className='image-container'>
            <img src={man} alt='man' />
            <img src={shapes2}  classNam='img-shape' alt='shape' />
        </div>

        <div className='value-container'>
          <SubHeading subtitle='COURSE FEATURES' title='Your Best Value Proposition' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' />
          <div className='value-container-top'>
            <ValueCard img={money1} title='Money Back Guarantee' desc='Lorem ipsum dolor sit amet, consectetur' />
            <ValueCard img={discount} title='Promotional Discounts' desc='Lorem ipsum dolor sit amet, consectetur' />
            <ValueCard img={local} title='Local Comunity' desc='Lorem ipsum dolor sit amet, consectetur' />
            <ValueCard img={money2} title='Financial Aid' desc='Lorem ipsum dolor sit amet, consectetur' />
          </div>
          <button type='button' className='btn-getstarted'>Get Started</button>
        </div>
    </section>
  )
}

export default Section2