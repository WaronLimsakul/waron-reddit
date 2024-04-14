import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../features/reddit/redditSlice';

const store = configureStore({
    reducer: {
        reddit: redditReducer
    }
});

export default store;

