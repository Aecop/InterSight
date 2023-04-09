import React from 'react';
import { useState, useEffect } from 'react';
import Wrapper from '../../assets/wrappers/Register.js';
import logo from '../../assets/img/logo.png';
import { FormRow } from '../index';


const initialState = {
    name: '',
    email: '',
    password: '',
    member: true,
};

const Register = () => {
    const [values, setValues] = useState(initialState)


    const handleChange = (e) => {
        console.log(e.target);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

  return (
    <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
            <img className='logo' src={logo} alt='logo'/>
            <h3>
                Login
            </h3>
            <FormRow type='text' name='name' value={values.name} handleChange={handleChange} />
            <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />
            <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />   
            <button type="submit" className='btn btn-block'>
                Submit
            </button>
        </form>
    </Wrapper>
  )
}

export default Register;