import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { ChatBubbleOutline } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { TimeAgo } from "./TimeAgo";
import { DiscussionList } from "./DiscussionsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscussion, selectDiscussions } from "../reddit/redditSlice";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

export const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    if (!expanded) {
      dispatch(fetchDiscussion({ subreddit: post.subreddit, id: post.id }));
    }
    setExpanded(!expanded);
  };

  const discussions = useSelector(selectDiscussions);
  const selectedDiscussions = discussions[post.id];

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
            <Grid container justifyContent="space-between">
              <Typography variant="h6" textAlign="left">
                {post.title}
              </Typography>
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
        {post.url || post.thumbnailUrl ? (
          <CardMedia
            component="img"
            height="auto"
            src={post.url || post.thumbnailUrl}
            title=""
          />
        ) : null}
        <CardContent
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid display="flex">
            <ImportExportIcon />
            <Typography variant="subtitle2">{post.ups}</Typography>
          </Grid>

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
          <DiscussionList discussions={selectedDiscussions} />
        </Collapse>
      </Card>
    </Grid>
  );
};
