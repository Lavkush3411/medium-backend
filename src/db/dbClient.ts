import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import dotenv from "dotenv";
dotenv.config();

const dbclient = new PrismaClient({
  datasourceUrl: process.env.POOL_URL,
}).$extends(withAccelerate());

export default dbclient;
