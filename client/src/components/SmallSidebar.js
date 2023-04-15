import React from 'react';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useAppContext } from '../context/appContext';
import logo from '../assets/img/logo.png';
import {FaWindowClose} from 'react-icons/fa';
import NavLinks from './NavLinks';


const SmallSidebar = () => {
  const {showSidebar, toggleSidebar} = useAppContext();
  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaWindowClose />
          </button>
          <header>
            <img src={logo} alt='InterSight' className='logo'/>
          </header>
          <NavLinks toggleSidebar={toggleSidebar}/>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar