import { Card, Divider, CardHeader, CardContent, Grid, Typography} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";


export const Discussion = ({ discussion }) => {
    return (
        <Card style={{ marginTop: "10" }}>
            <Divider />
            <CardHeader
              avatar={<AccountCircle></AccountCircle>}
              title={
                <Grid container alignItems="flex-start">
                  <Typography variant="subtitle1">{discussion.author}</Typography>
                </Grid>
              }
            />
            <CardContent>
              <Grid container alignItems="flex-start">
                <Typography>{discussion.body}</Typography>
              </Grid>
            </CardContent>
          </Card>
    )
}