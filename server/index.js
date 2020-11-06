import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv'
dotenv.config();

console.log(process.env.DB_PASSWORD)
const app = express();
//const DB_PASSWORD = process.env.DB_PASSWORD
app.use(bodyParser.json({limit:"30mb", extended: true}));//for large images
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));//setting up body parser

app.use(cors());

const CONNECTION_URL = `mongodb+srv://eloso85:${process.env.DB_PASSWORD}@cluster0.7ejd2.mongodb.net/<dbname>?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=>console.log(`Server running on port:${PORT}`)))
    .catch((error) => console.log(error.message));

    mongoose.set('useFindAndModify', false);


