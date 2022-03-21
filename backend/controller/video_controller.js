

import VideoModel from "../model/video_model.js";
export const getAllVideos=async(req,res)=>
{
    try {
        const allVideos=await VideoModel.find();
        res.status(200).json(allVideos)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export const insertVideo=async(req,res)=>
{
    const {title,timestamps,author}=req.body;
    const newVideo=VideoModel({title:title,image:`http://localhost:5000/image/${req.file.filename}`,timestamps:timestamps,author:author});
    try {
        await newVideo.save();
        const AllData=await VideoModel.find();
        res.status(201).json(AllData)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
