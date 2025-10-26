import express from 'express'
import { config } from 'dotenv';
import userRoute from './routes/userRoute.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import locationRoute from './routes/locationRoute.js';
import categoryrouter from './routes/categoryRoute.js';

const server = express(); // create obj from express
server.use(express.json()); 
server.use(cookieParser());

config();

server.use(cors({
  origin: [
    "http://localhost:5173",
    "https://job-management-project-vue-express-lemon.vercel.app"
  ], // your Vue dev server
  credentials: true               // allow cookies
}));

server.use("/api",userRoute)
server.use("/api",locationRoute);
server.use("/api",categoryrouter)

const PORT = process.env.PORT // call port from env
const HOST = process.env.HOST // call host from env

server.listen(PORT,()=>{
    console.log(`Server is running on: http://${HOST}:${PORT}`);
})