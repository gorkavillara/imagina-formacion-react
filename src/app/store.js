import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import postsReducer from '../features/postsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: [thunk],
});

export default store;
