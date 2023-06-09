import Job from '../models/Job.js'
import {StatusCodes} from 'http-status-codes';
import {BadRequestError, UnAuthenticatedError, NotFoundError} from '../errors/index.js'
import checkPermission from '../utils/checkPermission.js';
import mongoose from 'mongoose';
import moment from 'moment';

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
    const {id:jobId} = req.params
    const job = await Job.findOne({_id: jobId})

    if (!job) {
        throw new NotFoundError(`No job with id : ${jobId}`)
    }
    checkPermission(req.user, job.createdBy)

    await job.deleteOne();

    res.status(StatusCodes.OK).json({msg: 'Success! Job Removed!'})
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

    checkPermission(req.user, job.createdBy);

    const updatedJob = await Job.findOneAndUpdate({_id:jobId}, req.body, {
        new: true,
        runValidators: true
    });

 
    res.status(StatusCodes.OK).json({updatedJob})
};

const getAllJobs = async (req, res) => {
    
    const jobs = await Job.find({createdBy: req.user.userId});
    res.status(StatusCodes.OK).json({jobs, totalJobs: jobs.length, numOfPages: 1})


      
};




const showStats= async (req, res) => {
    let stats = await Job.aggregate([
        {$match:{createdBy:new mongoose.Types.ObjectId(req.user.userId)}},
        {$group:{_id:'$status', count:{$sum:1}}}
    ]);
    stats = stats.reduce((acc, curr)=> {
        const {_id:title,count} = curr
        acc[title] = count
        return acc
    },{})

    const defaultStats = {
        pending: stats.pending || 0,
        interview: stats.interview || 0,
        declined: stats.declined || 0
    }

    let monthlyStats = await Job.aggregate([
        {$match:{createdBy: new mongoose.Types.ObjectId(req.user.userId)}},
        {$group:{_id:{year:{$year:'$createdAt'}, month:{$month:'$createdAt'}},
        count:{$sum:1}}},
        {$sort:{'_id.year': -1, '_id.month': -1}}, {$limit: 6}
    
    ])

    monthlyStats = monthlyStats.map((item) => {
        const {_id:{year,month}, count} = item
        const date = moment().month(month - 1).year(year).format('MMM Y')
        return {date,count}
    }).reverse();
    res.status(StatusCodes.OK).json({defaultStats, monthlyStats})

    res.status(StatusCodes.OK).json({stats})
};




export { createJob, deleteJob, getAllJobs, updateJobs, showStats };