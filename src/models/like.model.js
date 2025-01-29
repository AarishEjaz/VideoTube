import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const likeSchema = new Schema({
    video:{
        type:Schema.Type.ObjectId
        ref:"Video"
    },
    comment:{
        type:Schema.Type.ObjectId,
        ref:"Comment"
    },
    tweet:{
        type:Schema.Type.ObjectId,
        ref:"Tweet"
    },
    likedBy:{
        type:Schema.Type.ObjectId,
        ref:"User"
    }
}{timeStamp:true})

export const Like = mongoose.mode("Like", likeSchema)