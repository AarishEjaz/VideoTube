import { asyncHandler } from "../utils/asyncHandler";


export const verifyJWT = asyncHandler(async(req,res,next,error)=>{
    req.cookies?.accessToken || req.header("Authrization")?
})