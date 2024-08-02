import express from "express";
import { getAllUsers, getUser } from "../../controllers/user";

export const userRouter = express.Router();

userRouter.get("/getbulk", getAllUsers);
userRouter.get("/get", getUser);
