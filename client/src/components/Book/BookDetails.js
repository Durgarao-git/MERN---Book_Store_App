import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FormLabel, TextField,Box,Button } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const BookDetails = () => {

  const [checked,setChecked]=useState(false);
  const [inputs,setInputs]=useState({});
  const history=useNavigate();
 
  const id=useParams().id;
  

  useEffect(()=>{
    const fetchHandler = async ()=>{
      return await axios.get(`http://localhost:3001/books/${id}`)
      .then((res)=>res.data).then(data=>setInputs(data.book))

    };

    fetchHandler();

  },[id]);

  const sendRequest = async() =>{
    await axios.put(`http://localhost:3001/books/${id}`,{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      vailable:Boolean(checked)

    }).then(res=>res.data);
  }



  const handleSubmit=(e)=>{
   e.preventDefault();
   sendRequest().then(()=>history("/books"))
 }

 const handleChange =(e)=>{
  setInputs((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value,

  }));
 }



  return (
    <div>
      {inputs &&<form  onSubmit={handleSubmit}>
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

        <Button variant="contained" type="submit">UPDATE BOOK</Button>
      </Box>


    </form>}
      
    </div>
  )
}

export default BookDetails
