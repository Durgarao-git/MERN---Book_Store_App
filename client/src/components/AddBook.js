import React, { useState } from 'react';
import { FormLabel, TextField,Box,Button } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



const AddBook = () => {

  const history=useNavigate();

  const [inputs,setInputs]=useState({
    name:'',
    description:'',
    author:'',
    price:'',  
    image:''
  });

  const [checked,setChecked]=useState(false)

const handleChange = (e) =>{
  setInputs((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value,

  }));

  //console.log(e.target.name,e.target.value)
}

const sendRequest = async() =>{
  await axios.post("https://mern-book-store-app-a3mt.onrender.com/books",{
    name:String(inputs.name),
    author:String(inputs.author),
    description:String(inputs.description),
    price:Number(inputs.price),
    image:String(inputs.image),
    vailable:Boolean(checked)
  }).then(res=>res.data);
}


const handleSubmit =(e)=>{
  e.preventDefault();
  console.log(inputs,checked)
  sendRequest().then(()=>history('/books'))
};

  return (
    <form  onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" justifyContent={"center"} maxWidth={700} alignContent={"center"} alignSelf={"center"}  marginLeft={"auto"}  marginRight={"auto"} marginTop={3} marginBottom={3}>
        <FormLabel>Name</FormLabel>
        <TextField  value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name' />

        <FormLabel>Author</FormLabel>
        <TextField value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author' />

        <FormLabel>Description</FormLabel>
        <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description' />

        <FormLabel>Price</FormLabel>
        <TextField value={inputs.price} onChange={handleChange} type="number" margin='normal' fullWidth variant='outlined' name='price' />

        <FormLabel>Image</FormLabel>
        <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image' />

        <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />

        <Button variant="contained" type="submit">ADD BOOK</Button>
      </Box>


    </form>
  )
}

export default AddBook
