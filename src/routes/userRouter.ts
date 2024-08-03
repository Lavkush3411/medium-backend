import express from "express";
import { getUser, signin, signup } from "../controllers/user";

export const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.get("/signin", signin);
userRouter.get("/get", getUser);
