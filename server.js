import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import notFoundMiddleware from './middleware/not-found.js';
import errorHandler from './middleware/error-handler.js';
import connectDB from './db/connect.js';
import authRouter from './routes/authRouter.js';
import jobRouter from './routes/jobsRouter.js';

dotenv.config();

const app = express();


app.use(express.json());

//middlewares
app.get('/', (req,res) => {
    res.send('WELCOME!')
});
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobRouter);
app.use(notFoundMiddleware);
app.use(errorHandler);



//port
const port = process.env.PORT || 3001;



const mongoStart = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

mongoStart();