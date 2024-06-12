import React from 'react'
import BooksCards from '../components/BooksCards';
import { useState, useEffect } from 'react';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
    }, [])
  return (
    <div>
      <BooksCards books={books} headline = "Other Books"/>
    </div>
  )
}

export default OtherBooks
