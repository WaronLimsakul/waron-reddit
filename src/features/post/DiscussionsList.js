import {
  Paper,
  LinearProgress,
} from "@mui/material";
import { Discussion } from "./Discussion";
import {
  selectDiscussionsLoadingStatus,
} from "../reddit/redditSlice";
import { useSelector } from "react-redux";

export const DiscussionList = ({ discussions }) => {
  const discussionsIsLoading = useSelector(selectDiscussionsLoadingStatus);
  return (
    <Paper>
      {(!discussions && discussionsIsLoading) ? (
        <>
          <LinearProgress />
        </>
      ) : ( 
        discussions && discussions.map((discussion) => <Discussion discussion={discussion} />)
      )}
    </Paper>
  );
};
