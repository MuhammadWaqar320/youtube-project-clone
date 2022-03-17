import express from "express";
import { insertVideo,getAllVideos } from "../controller/video_controller.js";
import multer from "multer";
const api_router=express.Router()



const storage=multer.diskStorage(
    {
        destination:'./Upload/videos',
        filename:(req,file,cb)=>
        {
            return cb(null,file.originalname)
        }
    }
    
)
const upload=multer(
    {
        storage:storage,
        limits:{fileSize:1000000}
    }
)
api_router.get('/video/get',getAllVideos);
api_router.post('/video/insert',upload.single('image'),insertVideo);
export default api_router;