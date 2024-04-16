import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const axios = require('axios');

export const kFormatter = (num) => {
  if (isNaN(num)) {
    return "";
  }
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
};

export const fetchPosts = createAsyncThunk("reddit/fetchPosts", async () => {
  try {
    const response = await fetch("https://www.reddit.com/r/picture.json");
    const jsonResponse = await response.json();
    const postsArray = jsonResponse.data.children;
    const posts = postsArray.map((item) => {
      let postData = {
        title: item.data.title,
        author: item.data.author,
        url: item.data.url,
        post_hint: item.data.post_hint,
        thumbnailUrl: item.data.thumbnail,
        id: item.data.id,
        numComments: kFormatter(item.data.num_comments),
        created_utc: item.data.created_utc,
      };
      if (item.data.is_video) {
        postData.videoUrl = item.data.media.reddit_video.fallback_url;
      }
      return postData;
    });
    return posts;
  } catch (error) {
    console.log(error);
  }
});

export const redditSlice = createSlice({
  name: "reddit",
  initialState: {
    subRedditStatus: "idle",
    fetchPostsFailed: false,
    isLoadingPosts: false,
    searchTarget: "posts",
    posts: [],
    comments: [],
  },
  reducers: {
    searchTargetUpdated: (state, action) => {
      state.searchTarget = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoadingPosts = true;
        state.fetchPostsFailed = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoadingPosts = false;
        state.fetchPostsFailed = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoadingPosts = false;
        state.fetchPostsFailed = true;
      });
  },
});

export const { searchTargetUpdated } = redditSlice.actions;
export const selectPosts = (state) => state.reddit.posts;
export const selectPostsLoadingStatus = (state) => state.reddit.isLoadingPosts;
export const selectPostsFinalStatus = (state) => state.reddit.fetchPostsFailed;
export const selectSearchTarget = (state) => state.reddit.searchTarget;
export default redditSlice.reducer;
