import {
  Card,
  Divider,
  CardHeader,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { TimeAgo } from "./TimeAgo";

export const Discussion = ({ discussion }) => {
  return (
    <Card style={{ marginTop: "10" }}>
      <Divider />
      <CardHeader
        avatar={<AccountCircle></AccountCircle>}
        title={
          <Grid container justifyContent='space-between'>
            <Typography variant="subtitle1">{discussion.author}</Typography>
            <Typography variant="subtitle2">
              <TimeAgo timestamp={discussion.created_utc} />
            </Typography>
          </Grid>
        }
      />
      <CardContent>
        <Grid container alignItems="flex-start">
          <Typography textAlign='left'>{discussion.body}</Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};
