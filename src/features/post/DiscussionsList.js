import { Card, Grid, Divider, CardHeader, CardContent, Typography, Paper } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Discussion } from "./Discussion";



export const DiscussionList = ({ discussions }) => {
    return (
        <Paper>
          {discussions.map(discussion => <Discussion discussion={discussion}/>)}
        </Paper>
    )
};
