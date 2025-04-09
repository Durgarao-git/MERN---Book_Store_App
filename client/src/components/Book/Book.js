import React from 'react';
import Button from '@mui/material/Button';
import './Books.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Book = (props) => {
    const {_id,name,author,description,price,availble,image}=props.book;
    const history=useNavigate();
    const deleteHandler =()=>{
      axios.delete(`http://localhost:3001/books/${_id}`)
      .then(res=>res.data).then(()=>history("/")).then(()=>history("/books"))
    }


  return (
    <div className='card'>
        <img src={image} alt={name} />
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>{price}/-</h2>
        <p>{availble}</p>

        <Button LinkComponent={Link}  to={`/books/${_id}`} sx={{backgroundColor:'#A3A8B5'}} >Update</Button>

        <Button onClick={deleteHandler} sx={{backgroundColor:'#d74d4d'}} >Delete</Button>
      
    </div>
  )
}

export default Book
