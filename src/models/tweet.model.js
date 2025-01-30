import mongoose ,{Schema} from 'mongoose'

const tweetSchema = new Schema({
    content:{
        type:String,
        required:true
    },
    owner:{
        type:Schema.Type.ObjectId,
        ref:"User"
    }
},{timeStamp:true})

export const Tweet = mongoose.model("Tweet", tweetSchema)