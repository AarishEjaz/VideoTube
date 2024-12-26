

import connectDB from './db/index.js'
import dotenv from "dotenv"
import { app } from "./app.js";
dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is up and running at port:${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed", error.message)
})







// (async()=>{
//     try{
//         mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log('error: ', error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listining on port ${process.env.PORT}`)
//         })
//     }catch(error) {
//         console.log(error.message)
//         throw error
//     }
// })
