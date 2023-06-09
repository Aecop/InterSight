// import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import morgan from 'morgan';
import notFoundMiddleware from './middleware/not-found.js';
import errorHandler from './middleware/error-handler.js';
import connectDB from './db/connect.js';
import authRouter from './routes/authRouter.js';
import jobRouter from './routes/jobsRouter.js';
import authenticateUser from './middleware/auth.js';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import path from 'path';
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

dotenv.config();

const app = express();

if(process.env.NODE.ENV !== 'production'){
    app.use(morgan('dev'))
};

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

//middlewares
app.get('/api/v1', (req,res) => {
    res.json({msg:"welcome"})
});
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs',authenticateUser, jobRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

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