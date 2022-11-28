import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { headerBg, searchIcon} from '../../images/index';
import './header.css';

const Header = () => {
  return (
    <header>
        <Navbar />
        <div className='header'>
            <div className='heading-text-container'>
                <span>Let information find you</span>
                <h1>Learn anything in a new way</h1>
                <p>Best learning platform to find any topic you need, and get access to a wide range of mastercourse from Professionals.</p>
                <div className='search-container'>
                    <input type='text' placeholder='Search Courses'></input>
                    <img src={searchIcon} alt='icon' />
                </div>
            </div>

            <div className='heading-img-container'>
                <img src={headerBg} alt='img' />
            </div>
        </div>
    </header>
  )
}

export default Header