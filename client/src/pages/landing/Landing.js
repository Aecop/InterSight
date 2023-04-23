import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png';
import sidelogo from '../../assets/img/sidelogo.png';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Wrapper from '../../assets/wrappers/Landing.js';


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="InterSight" className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Inter<span>Sight</span>
          </h1>
          <h4>
            Do you struggle with tracking many interviews you have lined up?
            Do not worry, this application will help you!!
          </h4>
          <p>
            You can now easily track every interviews you have lined up. 
            From edit, delete, update and keep track of interview accpetance, pending and rejection!
          </p>
          <Link to="/register" className='btn btn-hero'>
             Login or Signup! <AiOutlineArrowRight/>
          </Link>
        </div>
        
        <img src={sidelogo} alt='Side logo' className='img main-img'/>
        <div>
          <h4>About owner of the application Joon Ruiz</h4>
          <p>
            Developer Joon Ruiz is inspiring Full Stack devloper who want to create an web application to help user. 
          
          </p>
          <p>
          (I want to help upcoming future job seekers to use the this web app and get much help as they need from this application.)
          </p>
          <h4>
            For Futher question or advice, please reach out to Joon Ruiz
          </h4>
          <div className='link-site'>
            <a href='https://github.com/Aecop'>Github</a>
            <a href='https://www.linkedin.com/in/joon-ruiz-967611201/'>Linkedin</a>
            <a href='joonruiz08@gmail.com'>Email</a>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}


export default Landing;