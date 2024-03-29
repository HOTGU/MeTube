import express from "express";
import routes from "../routes";
import {
  editProfile,
  userDetail,
  changePassword
} from "../controller/userController";

export const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);
