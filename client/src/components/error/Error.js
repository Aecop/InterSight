import React from 'react';
import { Link } from 'react-router-dom';
import errorsvg from '../../assets/img/404error.svg';
import Wrapper from '../../assets/wrappers/Error.js';


const Error = () => {
  return (
    <Wrapper className="full-page">
        <div>
            <img src={errorsvg} alt="404 Not Found" />
            <h2>
                Opps! 
            </h2>
            <h4>
                Page you have searched for is not found! Please click on link below to go back to Landing page
            </h4>
            <Link to='/'>Go Back</Link>
        </div>
    </Wrapper>
  )
}

export default Error;