import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return posts.data;
});

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
    }),
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.error = null;
        state.status = "success";
      }),
      builder.addCase(fetchPosts.rejected, (state, action) => {
        state.posts = [];
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export const postsReducer = postsSlice.reducer;

export const { addPost } = postsSlice.actions;
