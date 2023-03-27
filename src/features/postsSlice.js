import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    fetchPostsSuccess: (state, action) => {
      state.status = "succeeded";
      state.posts = action.payload;
    },
    fetchPostsError: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const fetchPosts = async () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      dispatch(fetchPostsError(error));
    }
  };
};

export const { fetchPostsError, fetchPostsSuccess } = postsSlice.actions;

export default postsSlice.reducer;
