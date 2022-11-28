import React from 'react'
import {FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'
import {ImLinkedin} from 'react-icons/im'
import './footer.css'

const LinksCard = ({title, link1, link2, link3, link4}) => {
  return (
    <div className='links-card'>
    <h2>{title}</h2>
    <ul>
      <li><a href=''>{link1}</a></li>
      <li><a href=''>{link2}</a></li>
      <li><a href=''>{link3}</a></li>
      <li><a href=''>{link4}</a></li>
    </ul>
  </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='logo-container'>
          <h1>LEARNIT.</h1>
          <p>The world’s largest selection of courses </p>
          <div className='iconSocial-container'>
            <FaFacebookSquare style={{ cursor: 'pointer'}} size={25} />
            <FaTwitterSquare style={{ cursor: 'pointer'}} size={25} />
            <ImLinkedin style={{ cursor: 'pointer'}} size={23} />
          </div>
        </div>
        <div className='links-container'>
          <LinksCard title='Product' link1='Apps' link2='Softwares' link3='Agents' link4='Blog' />
          <LinksCard title='Resources' link1='Course Resources' link2='Learning Paths' link3='Video' link4='Free trial' />
          <LinksCard title='Company' link1='Patnerships' link2='Terms of use' link3='Privacy' link4='About us' />
        </div>
      </div>
      <p className='copyright'>Copyright 2022, Coding by Shabrina12 @github. All rights reserved.</p>
    </footer>
  )
}

export default Footer