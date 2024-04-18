import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import PetsIcon from "@mui/icons-material/Pets";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import CollectionsIcon from '@mui/icons-material/Collections';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import TheatersIcon from '@mui/icons-material/Theaters';
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { SportsBasketball } from "@mui/icons-material";

export const CategoriesList = () => {
  const [activeCard, setActiveCard] = useState(null);
  const handleCardClick = (cardName) => {
    setActiveCard(cardName);
  };

  return (
    <Paper elevation={1} style={{ backgroundColor: "#2c387e" }}>
      <Grid container spacing={1} flexDirection="column">
        <Grid item>
          <Typography variant="h5" style={{ color: "white", fontWeight:'bold' }}>
            Subreddits
          </Typography>
        </Grid>
        <Grid item style={{ width: "90%", alignSelf: "center" }}>
          <Card style={{ backgroundColor: activeCard === "cats" ? "#E4E4E4" : "white" }}>
            <CardActionArea component={Link} to={`r/cats`} onClick={() => handleCardClick("cats")}>
              <CardContent>
                <PetsIcon fontSize="large"/>
                {/* <Typography variant="paragraph"> Cats</Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item style={{ width: "90%", alignSelf: "center" }}>
          <Card style={{ backgroundColor: activeCard === "food" ? "#E4E4E4" : "white" }}>
            <CardActionArea component={Link} to={`r/food`} onClick={() => handleCardClick("food")}>
              <CardContent>
                <FastfoodIcon fontSize="large"/>
                {/* <Typography variant="paragraph"> Food</Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item style={{ width: "90%", alignSelf: "center" }}>
          <Card style={{ backgroundColor: activeCard === "pics" ? "#E4E4E4" : "white" }}>
            <CardActionArea component={Link} to={`r/pics`} onClick={() => handleCardClick("pics")}>
              <CardContent>
                <CollectionsIcon fontSize="large"/> 
                {/* <Typography variant="paragraph"> Pictures</Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item style={{ width: "90%", alignSelf: "center" }}>
          <Card style={{ backgroundColor: activeCard === "leagueoflegends" ? "#E4E4E4" : "white" }}>
            <CardActionArea component={Link} to={`r/leagueoflegends`} onClick={() => handleCardClick("leagueoflegends")}>
              <CardContent>
                <VideogameAssetIcon fontSize="large"/>
                {/* <Typography variant="paragraph"> League of Legends</Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item style={{ width: "90%", alignSelf: "center" }}>
          <Card style={{ backgroundColor: activeCard === "soccer" ? "#E4E4E4" : "white" }}>
            <CardActionArea component={Link} to={`r/soccer`} onClick={() => handleCardClick("soccer")}>
              <CardContent>
                <SportsSoccerIcon fontSize="large"/>
                {/* <Typography variant="paragraph">Soccer</Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item style={{ width: "90%", alignSelf: "center" }}>
          <Card style={{ backgroundColor: activeCard === "Bitcoin" ? "#E4E4E4" : "white" }}>
            <CardActionArea component={Link} to={`r/Bitcoin`} onClick={() => handleCardClick("Bitcoin")}>
              <CardContent>
                <CurrencyBitcoinIcon fontSize="large"/>
                {/* <Typography variant="paragraph">Bitcoin</Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item style={{ width: "90%", alignSelf: "center" }}>
          <Card style={{ backgroundColor: activeCard === "nba" ? "#E4E4E4" : "white" }}>
            <CardActionArea component={Link} to={`r/nba`} onClick={() => handleCardClick("nba")}>
              <CardContent>
                <SportsBasketballIcon fontSize="large"/>
                {/* <Typography variant="paragraph"> NBA</Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item style={{ width: "90%", alignSelf: "center" }}>
          <Card style={{ backgroundColor: activeCard === "movies" ? "#E4E4E4" : "white" }}>
            <CardActionArea component={Link} to={`r/movies`} onClick={() => handleCardClick("movie")}>
              <CardContent>
                <TheatersIcon fontSize="large"/>
                {/* <Typography variant="paragraph">Movies</Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          
        </Grid>
      </Grid>
    </Paper>
  );
};
