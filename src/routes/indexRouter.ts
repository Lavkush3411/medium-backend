import express from "express";
import { userRouter } from "./user/userRouter";

export const indexRouter = express.Router();

indexRouter.use("/user", userRouter);
