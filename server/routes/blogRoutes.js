import express from "express";
import {
  addBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "../controllers/blogControllers.js";

const blogRouter = express.Router();

blogRouter.route("/").post(addBlog).get(getBlogs);
blogRouter.route("/:blogId").get(getBlog).delete(deleteBlog).put(updateBlog);

export default blogRouter;
