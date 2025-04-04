import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'
import express from "express"
import dotenv from "dotenv"
const app = express()
dotenv.config()

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(
          `${process.env.MONGO_URI}/${DB_NAME}`,

        );
        console.log(`\n MongoDB connected DB HOST: ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("hello" + error.message)
        process.exit(1)
    }
}


export default connectDB
