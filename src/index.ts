import express, { NextFunction, Request, Response } from "express";
import dbclient from "./db/dbClient";
import serverless from "serverless-http";
import { indexRouter } from "./routes/indexRouter";
import bodyParser from "body-parser";
import fileupload from "express-fileupload";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload({ useTempFiles: true }));
app.use("/api/v1", indexRouter);

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ Status: "Server is up and running" });
});

const handler = serverless(app);

export { handler };
