import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import PetsIcon from '@mui/icons-material/Pets';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';



export const CategoriesList = () => {
    const handleClick = (e) => {
        console.log(`you're in ${e.target.value}`);
    }

    return (
        <Paper elevation={1}>
            <Grid container spacing={1} flexDirection='column'>
                <Grid item>
                    <Typography variant="h5">Subreddits</Typography>
                </Grid>
                <Grid>
                    <Card>
                        <CardActionArea component={Link} to={`/pet`} onClick={handleClick}>
                        <CardContent>
                            <PetsIcon />
                            <Typography variant="paragraph"> Pet</Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid>
                    <Card>
                        <CardActionArea component={Link} to={`/food`} onClick={handleClick}>
                        <CardContent>
                            <FastfoodIcon />
                            <Typography variant="paragraph"> Food</Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid>
                    <Card>
                        <CardActionArea component={Link} to={`/`} onClick={handleClick}>
                        <CardContent>
                            <Typography variant="paragraph">Home</Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Paper>
    );
};
