import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import {BiAlignLeft, BiUserCircle, BiCaretDown } from 'react-icons/bi';
import { useAppContext } from '../context/appContext';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const {toggleSidebar, logoutUser, user } = useAppContext();
  return (
    <Wrapper>
        <div className='nav-center'>
          <button className='toggle-btn' onClick={toggleSidebar}>
            <BiAlignLeft/>
          </button>
          <div>
            <img src={logo} alt='InterSight' className='logo'/>
            <h3 className='logo-text'>Dashboard</h3>
          </div>
          <div className='btn-container'>
            <button type='button' className='btn' onClick={() => setShowLogout(!showLogout)}>
              <BiUserCircle/>
              {user?.name}
              <BiCaretDown/>
            </button>
            <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
              <button type='button' className='dropdown-btn' onClick={logoutUser}>
                Logout
              </button>
            </div>
          </div>
        </div>
        
    </Wrapper>
  )
}

export default Navbar