import express from "express";
import { userRouter } from "./userRouter";
import { blogRouter } from "./blogRouter";

export const indexRouter = express.Router();

indexRouter.use("/user", userRouter);
indexRouter.use("/blog", blogRouter);
