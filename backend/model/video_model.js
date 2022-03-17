import mongoose from "mongoose";
const VideoSchema=mongoose.Schema({
    image:{type:String},
    title:{type:String,required:true,lowercase:true},
    timestamps:{type:String}
})
const VideoModel=mongoose.model('video',VideoSchema);
export default VideoModel;