import { Typography,Box } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignContent='center' alignItems={'center'} >
      <Typography variant='h3' >This is a CRUD Application</Typography>
      <Typography variant='h4' display={'flex'} flexDirection={'column'} justifyContent={'center'} alignContent='center' alignItems={'center'}>By MERN Stack</Typography>
    </Box>
  )
}

export default About
