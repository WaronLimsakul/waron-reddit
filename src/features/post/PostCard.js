import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { ChatBubbleOutline } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { TimeAgo } from "./TimeAgo";
import RedditIcon from "@mui/icons-material/Reddit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Divider, Paper } from "@mui/material";
import { DiscussionList } from "./DiscussionsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscussion, selectDiscussions } from "../reddit/redditSlice";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const ChatButtonWrapper = styled(CardActions)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const discussions = useSelector(selectDiscussions);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    dispatch(fetchDiscussion(`r/${post.subreddit}/${post.id}.json`));
    console.log(discussions);
  };

  return (
    <Grid>
      <Card>
        <CardHeader
          avatar={
            <StyledAvatar
              alt="profile picture"
              src="https://cdn-icons-png.flaticon.com/512/1383/1383267.png"
            >
              {post && post.author}
            </StyledAvatar>
          }
          title={
            <Grid container alignItems="flex-start">
              <Typography variant="h6">{post.title}</Typography>
            </Grid>
          }
        />
        {post.videoUrl && (
          <CardMedia
            component="video"
            height="auto"
            controls
            src={post.videoUrl}
            title="title"
          />
        )}
        {post.url ? (
          <CardMedia component="img" height="auto" src={post.url} title="" />
        ) : (
          <CardMedia
            component="img"
            height="auto"
            src={post.thumbnailUrl}
            title=""
          />
        )}
        <CardContent
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1">Posted by {post.author}</Typography>
          <Typography variant="subtitle2">
            <TimeAgo timestamp={post.created_utc} />
          </Typography>
          <IconButton onClick={handleExpandClick}>
            {" "}
            <ChatBubbleOutline style={{ marginRight: "3" }} />
            <Typography variant="subtitle2">{post.numComments}</Typography>
          </IconButton>
        </CardContent>
        <Collapse in={expanded} timeout="auto">
          <DiscussionList discussions={discussions}/>
        </Collapse>
      </Card>
    </Grid>
  );
};
