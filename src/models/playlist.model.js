import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const playlistSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    videos:{
        type:Schema.Type.ObjectId,
        ref:"Video"
    },
    owner:{
        type:Schema.Type.ObjectId,
        ref: "User"
    }
}{timeStamp:true})

export const Playlist = mongoose.model("Playlist",playlistSchema)