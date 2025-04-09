import { Box, Button, Typography } from '@mui/material'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Box  sx={{display:'flex' , flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Typography variant='h2'>Welcome to Book Store</Typography>
        <Button LinkComponent={NavLink} to="/books" variant='contained'>See All Books</Button>
        </Box>
      
    </div>
  )
}

export default Home
