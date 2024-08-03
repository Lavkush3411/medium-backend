import { Request, Response } from "express";
import dbclient from "../db/dbClient";


export const signup = async (req: Request, res: Response) => {
  res.status(200).json("signup");
};

export const signin = async (req: Request, res: Response) => {
  res.status(200).json("signin");
};

export const getUser = async (req: Request, res: Response) => {
  const users = await dbclient.users.findMany();

  res.status(200).json(users);
};
