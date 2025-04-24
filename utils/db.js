import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

async function connect_db(){
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        if(connection){
            console.log('MongoDB connection established');
        }
    } catch (err) {
        console.log('Mongo ERROR: ', err);
    }
}

export default connect_db;