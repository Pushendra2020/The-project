
import mongoose from 'mongoose';
//const mongoose = require("mongoose");
let uri="mongodb+srv://pushendralink2020:K86Yo8n5xF7tAPb9@therandom.ifwln.mongodb.net/Therandom?retryWrites=true&w=majority&appName=Therandom"

const connectDB = async () => {
    return mongoose.connect(uri);
};

//module.exports = connectDB;
export default connectDB;