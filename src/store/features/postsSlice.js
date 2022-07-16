import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await axios.get("http://localhost:5000/api/blog");

  return posts.data;
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPosts",
  async (data) => {
    const response = await axios.post("http://localhost:5000/api/blog", data);
    return response.data;
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ blogId, post }) => {
    const response = await axios.put(
      `http://localhost:5000/api/blog/${blogId}`,
      post
    );

    console.log("responded", response.data);

    return response.data;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (blogId) => {
    const response = await axios.delete(
      `http://localhost:5000/api/blog/${blogId}`
    );

    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    error: null,
    status: "idle", // idle - loading - success - failed -
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.error = null;
      state.status = "success";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.posts = [];
      state.error = action.error.message;
      state.status = "failed";
    });
    builder.addCase(addNewPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      const { _id } = action.payload;
      const newPosts = state.posts.map((post) =>
        post._id === _id ? action.payload : post
      );
      state.posts = newPosts;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      const { _id } = action.payload;

      const newPosts = state.posts.filter((dt) => dt._id !== _id);

      state.posts = newPosts;
    });
  },
});

export const postsReducer = postsSlice.reducer;

export const fetchAllPosts = (state) => state.posts;
export const fetchSinglePost = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);

export const { addPost } = postsSlice.actions;
