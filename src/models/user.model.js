import mongoose from 'mongoose'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt "
import dotenv from "dotenv"
dotenv.config()

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  coverImage:{
    type:String,
  },
  watchHistory:[
    {
        type:Schema.Types.ObjectId,
        ref:"Video"
    }
  ],
  password:{
    type:String,
    required:[true, "Password is required"]
  },
  refreshToken:{
    type:String,

  }
},{timestamps:true});

userSchma.pre("save", async function(next){
  if(!this.isModified("password")) return next() //if negative checking is not don then you can write the encryption code in side the "if" block
  this.password = bcrypt.hash(this.password,10) // might need to add await
  next()

})

userSchema.methods.isPasswordCorrect = async function(password){
 return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
  return jwt.sign({
    _id:this._id,
    email:this.email,
    username: this.username,
    fullname: this.fullname,
  },process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}

userSchema.methods.refreshAccessToken = function () {
   return jwt.sign(
     {
       _id: this._id,
     },
     process.env.REFRESH_TOKEN_SECRET,
     { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
   );
}
export const User = mongoose.model("User", userSchema)