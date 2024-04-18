import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import PetsIcon from "@mui/icons-material/Pets";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";

export const CategoriesList = () => {
  return (
    <Paper elevation={1}>
      <Grid container spacing={1} flexDirection="column">
        <Grid item>
          <Typography variant="h5">Subreddits</Typography>
        </Grid>
        <Grid>
          <Card>
            <CardActionArea component={Link} to={`r/cats`}>
              <CardContent>
                <PetsIcon />
                <Typography variant="paragraph"> Cats</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid>
          <Card>
            <CardActionArea component={Link} to={`r/food`}>
              <CardContent>
                <FastfoodIcon />
                <Typography variant="paragraph"> Food</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid>
          <Card>
            <CardActionArea component={Link} to={`r/pics`}>
              <CardContent>
                <Typography variant="paragraph">picture</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid>
          <Card>
            <CardActionArea component={Link} to={`r/leagueoflegends`}>
              <CardContent>
                <Typography variant="paragraph">League of Legends</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid>
          <Card>
            <CardActionArea component={Link} to={`r/soccer`}>
              <CardContent>
                <Typography variant="paragraph">Soccer</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid>
          <Card>
            <CardActionArea component={Link} to={`r/Bitcoin`}>
              <CardContent>
                <Typography variant="paragraph">Bitcoin</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid>
          <Card>
            <CardActionArea component={Link} to={`r/nba`}>
              <CardContent>
                <Typography variant="paragraph">NBA</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid>
          <Card>
            <CardActionArea component={Link} to={`r/movies`}>
              <CardContent>
                <Typography variant="paragraph">Movies</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};
