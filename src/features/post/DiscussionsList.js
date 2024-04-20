import {
  Card,
  Grid,
  Divider,
  CardHeader,
  CardContent,
  Typography,
  Paper,
  CircularProgress,
  LinearProgress,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Discussion } from "./Discussion";
import {
  fetchDiscussion,
  selectDiscussionsLoadingStatus,
} from "../reddit/redditSlice";
import { useSelector } from "react-redux";

export const DiscussionList = ({ discussions }) => {
  const discussionsIsLoading = useSelector(selectDiscussionsLoadingStatus);
  return (
    <Paper>
      {discussionsIsLoading ? (
        <>
          <LinearProgress />
          <br></br>
          <LinearProgress />
          <br></br>
          <LinearProgress />
        </>
      ) : (
        discussions.map((discussion) => <Discussion discussion={discussion} />)
      )}
    </Paper>
  );
};
