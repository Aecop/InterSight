const createJob = async (req, res) => {
    res.send('create Job')
};

const deleteJob = async (req, res) => {
    res.send('Delete Job')
};

const updateJobs = async (req, res) => {
    res.send('Update Job')
};

const getAllJobs = async (req, res) => {
    res.send('Get all jobs')
};

const showStats= async (req, res) => {
    res.send('Show stats')
};




export { createJob, deleteJob, getAllJobs, updateJobs, showStats }