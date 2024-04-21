import React, { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPosts,
  fetchPosts,
  selectPostsLoadingStatus,
  searchTargetUpdated,
  selectPostsFinalStatus,
  selectSearchTarget,
} from "../reddit/redditSlice";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid"; 
import { FailedCard } from "../category/FailedCard";

export const PostList = () => {
  const dispatch = useDispatch();
  const { subreddit } = useParams();
  const searchTerm = useSelector(selectSearchTarget);
  
  useEffect(() => {
    dispatch(fetchPosts(subreddit));
  }, [subreddit]);

  const posts = useSelector(selectPosts);
  const postsIsLoading = useSelector(selectPostsLoadingStatus);
  const fetchPostsFailed = useSelector(selectPostsFinalStatus);
  console.log(posts);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Grid container spacing={2} alignItems="center" alignContent="center">
      <Grid container spacing={2} >
        {postsIsLoading ? <Grid item xs={12} style={{textAlign: 'center'}}><CircularProgress size={60}/></Grid> : filteredPosts.map((post) => <Grid item xs={12}><PostCard post={post}/></Grid>)}
      </Grid>
    </Grid>
  );
};
