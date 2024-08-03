import express from "express";
import {
  getBlogByID,
  getBlogs,
  postBlog,
  updateBlog,
} from "../controllers/blog";

export const blogRouter = express.Router();

blogRouter.get("/bulk", getBlogs);
blogRouter.get("/:id", getBlogByID);
blogRouter.post("/", postBlog);
blogRouter.put("/", updateBlog);
