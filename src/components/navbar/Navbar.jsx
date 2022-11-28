import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
        <div className='logo-container'>
            <h1>LEARNIT.</h1>
        </div>
        <div className='nav-links-container'>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>Courses</a></li>
                <li><a href=''>Pricing</a></li>
                <li><a href=''>Blog</a></li>
                <li><a href='' className='btn-contact'>Contact Us</a></li>
            </ul>
        </div>

        <div className='navbar-smallscreen'>
            <RiMenu3Line style={{'cursor': 'pointer'}} color='white' fontSize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
                <div className='navbar-smallscreen_overlay'>
                <RiCloseLine  color='white' fontSize={27} className='close_icon' onClick={() => setToggleMenu(false)} />
                <ul className='navbar-smallscreen_links'>
                  <li><a href=''>Home</a></li>
                  <li><a href=''>Courses</a></li>
                  <li><a href=''>Pricing</a></li>
                  <li><a href=''>Blog</a></li>
                  <li><a href='' className='btn-contact'>Contact Us</a></li>
                </ul>
            </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar