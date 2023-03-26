import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    fetchPosts: (state) => {
      state.status = 'loading';
    },
    fetchPostsSuccess: (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload;
    },
    fetchPostsError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  }
});

export const { fetchPosts, fetchPostsError, fetchPostsSuccess } = postsSlice.actions

export default postsSlice.reducer;
