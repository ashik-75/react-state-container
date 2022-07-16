import asyncHandler from "express-async-handler";
import Blog from "../models/Blog.js";

// TODO: Create Blog
export const addBlog = asyncHandler(async (req, res) => {
  console.log(req.body.genre);
  const blog = new Blog(req.body);

  await blog.save();

  res.json(blog);
});

// TODO: Get All the blogs
export const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// TODO: Get Single Blog
export const getBlog = asyncHandler(async (req, res) => {
  const blog = await Blog();
  const result = await blog.findGenre("thriller");

  // TODO: findDataByTitle
  const data = await Blog.findByTitle("Book store part 1");

  const another = await Blog.findByLetter("rt");

  res.json(another);
});

// ? Update Blog
export const updateBlog = asyncHandler(async (req, res) => {
  console.log("Hit the route ", req.body);
  const dt = await Blog.findOneAndUpdate(
    {
      _id: req.params.blogId,
    },
    {
      $set: req.body,
    },
    {
      new: true,
    }
  );
  res.json(dt);
});

// !Delete Blog
export const deleteBlog = asyncHandler(async (req, res) => {
  const dt = await Blog.findByIdAndDelete(req.params.blogId);

  console.log({ dt });
  res.json(dt);
});
