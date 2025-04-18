import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from '../Book/Book';
import './Books.css';


const URL = "https://mern-book-store-app-a3mt.onrender.com/books";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data)
}
const Books = () => {

    const [books, setBooks] = useState("");

    useEffect(() => {
        fetchHandler().then(data => setBooks(data.books))

    }, [])

    console.log(books)

    return (
        <div>
            <ul>
                {books && books.map((book,i)=>{
                    return <div key={i} className='book'>
                        <Book book={book} />
                    </div>
                })}
            </ul>
        </div>
    )
}

export default Books
