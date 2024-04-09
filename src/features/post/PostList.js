import React, { useEffect } from 'react'
import { PostCard } from './PostCard'
// import { useSelector, useDispatch } from 'react-redux'
// import { selectPosts, fetchPosts, selectPostsStatus, searchTargetUpdated } from '../reddit/redditSlice'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

export const PostList = () => {
    return (
        <Grid container spacing={1}>
            <Grid item>
                <PostCard />
            </Grid>
            <Grid item>
                <PostCard />
            </Grid>
            <Grid item>
                <PostCard />
            </Grid>
        </Grid>
    )
}