import express from "express";
import api_router from "./router/routes.js";
import bodyParser from "body-parser";
import cors from 'cors';
const app=express();
app.use(cors())
app.use("/image", express.static("Upload/videos"));
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(api_router)
export default app