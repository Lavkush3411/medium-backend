import { Request, Response } from "express";
import dbclient from "../db/dbClient";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await dbclient.users.findMany();

  res.status(200).json(users);
};

export const getUser = () => {};
