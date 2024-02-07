import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAuthPosts = createAsyncThunk(
  "posts/fetchAuthPosts",
  async () => {
    const response = await axios.get("https://dummyjson.com/auth/posts", {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuthPosts.fulfilled, (state, action) => {
      state.posts = action.payload.posts;
    });
    builder.addCase(fetchAuthPosts.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },
});

export const postsReducer = postsSlice.reducer;
