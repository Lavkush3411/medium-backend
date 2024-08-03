import { Request, Response } from "express";
import dbclient from "../db/dbClient";

export const postBlog = async (req: Request, res: Response) => {
  const { content, title, autherId } = req.body;
  const autherIdNumber = Number(autherId);
  if (!content || !title || !autherId)
    return res.status(400).json({ Err: "No Data was sent to create blogpost" });
  try {
    await dbclient.blog.create({
      data: {
        content,
        title,
        autherId: autherIdNumber,
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ err: "Some Error Occured while creating blogpost" });
  }

  return res.status(201).json("Blog created");
};

export const updateBlog = async (req: Request, res: Response) => {
  res.status(200).json("Blog Updated");
};

export const getBlogByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);

  try {
    const blogpost = await dbclient.blog.findUnique({
      where: { id: Number(id) },
    });

    return res.status(200).json(blogpost);
  } catch {
    return res
      .status(400)
      .json({ err: "Some Error Occured while getting blogpost" });
  }
};

export const getBlogs = async (req: Request, res: Response) => {
  console.log("blogs");
  res.status(200).json("Blogs in bulk");
};
