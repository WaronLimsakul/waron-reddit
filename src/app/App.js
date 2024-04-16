
import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from '../components/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PostList } from '../features/post/PostList';
import { CategoriesList } from '../features/category/CategoriesList';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Pet } from '../features/category/Pet';
import { Food } from '../features/category/Food';



function App() {
  return (
    <Router>
    <div className='App'>
      <Paper elevation={2}>
        <Grid container spacing={3}>  
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={false} sm={1} md={1} lg={1}> 
          </Grid>
          <Grid item xs={7} sm={7} md={8} lg={8} align="center">
            <Routes>
              <Route path='/' element={<PostList />}></Route>
              <Route path='/pet' element={<Pet />}></Route>
              <Route path='/food' element={<Food />}></Route>
            </Routes>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={2} align="center">
              <CategoriesList />
          </Grid>
        </Grid>
      </Paper>
    </div>
    </Router>
  );
}

export default App;
