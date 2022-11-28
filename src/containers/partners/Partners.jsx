import React from 'react';
import {stars, microsoft, slack, apple, woo, sitepoint} from '../../images';
import './partners.css';

const Partners = () => {
  return (
    <section className='partners-section'>
      <div className='section-top-container'>
        <div className='partner-title-container'>
          <h1>LEARNIT.</h1>
          <p>More than 45,000+ companies trust Learnit</p>
        </div>

        <div className='testimony-container'>
          <img src={stars} alt='stars' />
          <p>5 Star Ratings (2k+ Review)</p>
        </div>
      </div>

      <div className='section-bottom-container'>
        <img src={microsoft} alt='img' />
        <img src={slack} alt='img' />
        <img src={apple} alt='img' />
        <img src={woo} alt='img' />
        <img src={sitepoint} alt='img' />
      </div>
    </section>
  )
}

export default Partners