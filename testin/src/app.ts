import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { notFound, internalError } from './error-handling';
import authRoutes from './routes/auth.routes';

require('dotenv').config();

require('./db');

const app = express();
import { uploader } from './middlewares/cloudinary.config';

const FRONTEND_URL = process.env.ORIGIN || 'http://localhost:5173';

app.use(morgan('dev'));
app.use(helmet());
app.use(
  cors({
    origin: [FRONTEND_URL],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes here
app.use('/auth', authRoutes);

//Error handling
app.use(notFound);
app.use(internalError);

export default app;
