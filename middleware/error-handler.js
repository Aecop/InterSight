import {StatusCodes} from 'http-status-codes';


const errorHandler = (err, req, res, next) => {
    console.log(err.message);
    const defaultError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Opps! Error Occured! Try again later!"
    }
    if(err.name === 'ValidationError'){
        defaultError.statusCode = StatusCodes.BAD_REQUEST;
        defaultError.msg = Object.values(err.errors).map((item) => item.message).join(',');
    }
    if(err.code && err.code === 11000){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        defaultError.msg = `${Object.keys(err.keyValue)} needs to be unique!`
    }
    res.status(defaultError.statusCode).json({msg:defaultError.msg});
};

export default errorHandler;