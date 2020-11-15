import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import cors from 'cors';
import dotenv from 'dotenv'
import Prisma from "./index";
import * as bodyParser from 'body-parser'

dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.PORT;

const app = express();



// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/post', async (req , res,next) => {
    const post = await Prisma.post()
    res.json(post), next})
app.get('/user', async (req , res, next) => {
    const user = await Prisma.user()
    res.send(user), next})
app.get('/profile', async (req , res, next) => {
    const profile = await Prisma.profile()
    res.send(profile), next})


app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
