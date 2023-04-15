import React from 'react';
import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import logo from '../assets/img/logo.png';
import { useAppContext } from '../context/appContext';

const BigSidebar = () => {
  const {showSidebar, toggleSidebar} = useAppContext();
  return (
    <Wrapper>
        <div className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
          <div className='content'>
            <header>
              <img src={logo} alt='InterSight' className='logo'/>
            </header>
            <NavLinks toggleSidebar={toggleSidebar}/>
          </div>
        </div>
    </Wrapper>
  )
}

export default BigSidebar