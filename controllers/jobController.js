import Job from '../models/Job.js'
import {StatusCodes} from 'http-status-codes';
import {BadRequestError, UnAuthenticatedError, NotFoundError} from '../errors/index.js'

const createJob = async (req, res) => {
    const {position, company} = req.body
    if(!position || !company) {
        throw new BadRequestError('Please provide all values')
    };
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({job});
};

const deleteJob = async (req, res) => {
    res.send('Delete Job')
};

const updateJobs = async (req, res) => {
    const {id:jobId} = req.params
    const {company, position} = req.body

    if(!position ||!company){
        throw new BadRequestError("Please provide all values");
    };
    const job = await Job.findOne({_id: jobId})

    if (!job){
        throw new NotFoundError(`No job with id: ${jobId}`)
    };

    const updatedJob = await Job.findOneAndUpdate({_id:jobId}, req.body, {
        new: true,
        runValidators: true
    });
    res.status(StatusCodes.OK).json({updatedJob})
};

const getAllJobs = async (req, res) => {
    const jobs = await Job.find({createdBy: req.user.userId});
    res.status(StatusCodes.OK).json({jobs, totlaJobs: jobs.length, numOfPages: 1})
};

const showStats= async (req, res) => {
    res.send('Show stats')
};




export { createJob, deleteJob, getAllJobs, updateJobs, showStats }