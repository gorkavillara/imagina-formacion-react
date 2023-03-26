import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import postsReducer from '../features/postsSlice';
import { postsSaga } from '../redux-saga/postsSagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(postsSaga);

export default store;
