import React, { useEffect } from "react";
import { PostCard } from "./PostCard";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPosts,
  fetchPosts,
  selectPostsLoadingStatus,
  searchTargetUpdated,
  selectPostsFinalStatus,
} from "../reddit/redditSlice";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { FailedCard } from "../category/FailedCard";

export const PostList = () => {
  const dispatch = useDispatch();
  const subreddit = useParams();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [subreddit]);

  const posts = useSelector(selectPosts);
  const postsIsLoading = useSelector(selectPostsLoadingStatus);
  const fetchPostsFailed = useSelector(selectPostsFinalStatus);
  console.log(posts);

  return (
    <Grid container spacing={2} alignItems="center" alignContent="center">
      <Grid item xs={12}>
        {postsIsLoading && <CircularProgress />}
        {posts.map((post) => <PostCard post={post} />)}
      </Grid>
    </Grid>
  );
};
