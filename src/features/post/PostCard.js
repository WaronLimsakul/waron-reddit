import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { ChatBubbleOutline } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Grid  from '@mui/material/Grid';
import React, { useState } from 'react';
import  {styled}  from '@mui/material/styles';





const StyledAvatar = styled(Avatar)(({ theme }) => ({
    marginRight: theme.spacing(1)
  }));
  
  const ChatButtonWrapper = styled(CardActions)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
  }));



export const PostCard = (props) => {
    const { post } = props;
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return (
        <Grid>
            <Card>
                <CardHeader
                avatar={
                <StyledAvatar  alt='profile picture' src='https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg'>
                    Username
                </StyledAvatar>
                }
                title={
                    <Grid container alignItems="flex-start" flexDirection='column' >
                        <Typography variant="h6" >Title of the post Esus</Typography>
                    </Grid>
                }
                />
                <CardMedia 
                component='img'
                height="300"
                image='https://preview.redd.it/the-forgotten-cat-meme-v0-ux74bsifrpda1.jpg?width=640&crop=smart&auto=webp&s=19a5e9603a5d27c8f2c6b74b709118e219808d36' title="test pic"/>
                <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='subtitle1'>Posted in September 14, 2016</Typography>
                    <IconButton onClick={handleExpandClick}> <ChatBubbleOutline /></IconButton>
                </CardContent>
                <Collapse in={expanded} timeout="auto">
                    <Typography paragraph>If you see me, you're great at this!</Typography>
                </Collapse>
            </Card>
        </Grid>
    );
};
