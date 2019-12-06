import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  deleteVideo,
  postEditvideo,
  getEditVideo
} from "../controller/videoController";
import { uploadVideo } from "../middleware";

export const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditvideo);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.deleteVideo(), deleteVideo);
