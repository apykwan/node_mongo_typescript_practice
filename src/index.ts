import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import cookieParser from 'cookie-parser';
import cors from 'cors';
require('dotenv').config();

import router from './router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({ msg: 'hello world' }); 
})

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/')
});