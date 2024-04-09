
import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from '../components/Header';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { PostList } from '../features/post/PostList';



function App() {
  return (
   <Router>
    <div className='App'>
      <Paper elevation={2}>
        <Grid container spacing={2}>  
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={false} sm={1} md={2} lg={3}> 
          </Grid>
          <Grid item xs={8} sm={7} md={5} lg={4} align="center">
            <PostList />
          </Grid>
        </Grid>
      </Paper>
    </div>
   </Router>
  );
}

export default App;
