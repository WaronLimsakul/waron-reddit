import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const axios = require("axios");

export const kFormatter = (num) => {
  if (isNaN(num)) {
    return "";
  }
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
};

export const fetchPosts = createAsyncThunk(
  "reddit/fetchPosts",
  async (subreddit) => {
    try {
      const response = await fetch(
        `https://www.reddit.com/r/${subreddit}.json`
      );
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
          subreddit: item.data.subreddit,
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
  }
);

export const fetchDiscussion = createAsyncThunk(
  "reddit/fetchDiscussion",
  async (discussionPath) => {
    try {
      const response = await fetch(`https://www.reddit.com/${discussionPath}`);
      const jsonResponse = await response.json();
      const discussionsArray = jsonResponse[1].data.children;
      const discussions = discussionsArray.slice(0 ,10).map((item) => {
        return {
          author: item.data.author,
          body: item.data.body,
          id: item.data.id,
          ups: kFormatter(item.data.ups),
          created_utc: item.data.created_utc,
        };
      });
      return discussions;
    } catch (e) {
      console.log(e);
    }
  }
);

export const redditSlice = createSlice({
  name: "reddit",
  initialState: {
    subRedditStatus: "idle",
    fetchPostsFailed: false,
    isLoadingPosts: false,
    fetchDiscussionFailed: false,
    isLoadingDicussions: false,
    searchTarget: "posts",
    posts: [],
    discussions: [],
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
      })
      .addCase(fetchDiscussion.pending, (state) => {
        state.isLoadingDicussions = true;
        state.fetchDiscussionFailed = false;
      })
      .addCase(fetchDiscussion.fulfilled, (state, action) => {
        state.isLoadingDicussions = false;
        state.fetchDiscussionFailed = false;
        state.discussions = action.payload;
      })
      .addCase(fetchDiscussion.rejected, (state) => {
        state.isLoadingDicussions = false;
        state.fetchDiscussionFailed = true;
      });
  },
});

export const { searchTargetUpdated } = redditSlice.actions;
export const selectPosts = (state) => state.reddit.posts;
export const selectPostsLoadingStatus = (state) => state.reddit.isLoadingPosts;
export const selectPostsFinalStatus = (state) => state.reddit.fetchPostsFailed;
export const selectSearchTarget = (state) => state.reddit.searchTarget;
export const selectDiscussions = (state) => state.reddit.discussions;
export default redditSlice.reducer;
