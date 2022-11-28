import React from 'react';
import './subheading.css';

const SubHeading = ({subtitle, title, desc}) => {
  return (
    <div className='subHeading'>
        <span className='subheading-span'>{subtitle}</span>
        <h1 className='subheading-title'>{title}</h1>
        <p className='subheading-p'>{desc}</p>
    </div>
  )
}

export default SubHeading