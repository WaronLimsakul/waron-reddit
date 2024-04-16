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
      <Grid container xs={12} spacing={2} style={{marginTop:'10'}}>
        {postsIsLoading && <CircularProgress />}
        {posts.map((post) => <Grid item xs={12}><PostCard post={post}/></Grid>)}
      </Grid>
    </Grid>
  );
};
