import User from '../models/User.js';
import {StatusCodes} from 'http-status-codes';

//For Error Handling, See errors directory
import {BadRequestError, UnAuthenticatedError} from '../errors/index.js';



const register = async (req, res) => {
    const { name, email, password } = req.body
    if(!name || !email || !password){
        throw new BadRequestError('Please Provide all values in the field')
    }
    const userEmailExist = await User.findOne({email});
    if(userEmailExist){
        throw new BadRequestError('Email already exists');
    };

    const user = await User.create({name, email, password});
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json(
        {user:{
            email:user.email, 
            location:user.location, 
            name:user.name
        }, 
        token,
        location: user.location
    });
    
};


const login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        throw new BadRequestError('Please provide all values');
    };

    const user = await User.findOne({email}).select('+password')
    if(!user){
        throw new UnAuthenticatedError('Invalid Credential');
    };

    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        throw new UnAuthenticatedError('Invalid Credential');
    };

    const token = user.createJWT();
    user.password = undefined
    res.status(StatusCodes.OK).json({user, token, location: user.location})
};

const updateUser = (req, res) => {
    res.send('update user')
};


export {register, login, updateUser}
