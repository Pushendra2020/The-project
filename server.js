import express from 'express';
const app = express();
const port = 3000;
import connectDB from './db/connect.js';
const start = async () => {
    try{
        await connectDB();
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        });
    }catch(error){
        console.log(error)
    }
};
start();