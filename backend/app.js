import express from 'express';
import path from 'path';
import 'dotenv/config';

import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';
import connectDb from './connect-db.js';

// import usersRouter  from './routes/users.js';
import mentosRouter from './routes/mentos.js';

connectDb(process.env.DB_HOST, process.env.DB_NAME);

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use('/users', usersRouter);
app.use('/api', mentosRouter);

app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})

export default app;
