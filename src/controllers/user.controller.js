import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js"

const registerUser = asyncHandler(async(req,res) =>{
    // res.status(200).json({message:"ProgrammingBeast"})
    const {fullName,email,username,password} = req.body
    console.log(email);
    if([fullName,email,username,password].some((field)=>field?.trim==="")){
        throw new ApiError(400,"All fields are required")
    }
})

export {registerUser}