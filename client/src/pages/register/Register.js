import React from 'react';
import { useState, useEffect } from 'react';
import Wrapper from '../../assets/wrappers/Register.js';
import logo from '../../assets/img/logo.png';
import { FormRow, Alert } from '../index';
import { useAppContext } from '../../context/appContext.js';
import { useNavigate } from 'react-router-dom';


const initialState = {
    name: '',
    email: '',
    password: '',
    member: true,
   
};

const Register = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState(initialState)
    const { user, isLoading, showAlert, displayAlert, registerUser } = useAppContext();
    const toggleMember = () => {
        setValues({...values, member:!values.member})
    };

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, member } = values
        if (!email || !password || (!member && !name )){
            displayAlert();
            return
        } 
        const currentUser = {name, email, password}
        if(member){
            console.log('already a member');
        }else {
            registerUser(currentUser);
        }

        console.log(values)
    };

    useEffect(() => {
        if(user){
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }
    }, [user, navigate])

  return (
    <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
            <img className='logo' src={logo} alt='logo'/>
            <h3>
                {values.member ? "Log In!" : "Register!"}
            </h3>
            {showAlert && <Alert />}
            {!values.member && (
                <FormRow type='text' name='name' value={values.name} handleChange={handleChange} />
            )}
            
            <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />
            <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />   
            <button type="submit" className='btn btn-block' disabled={isLoading}>
                Submit
            </button>
            <p>
                {values.member?'Not a member?':'Already a member?'}
                <button type='button' onClick={toggleMember} className='member-btn'>
                    {values.member?'Register':'Login'}
                </button>
            </p>
        </form>
    </Wrapper>
  )
}

export default Register;