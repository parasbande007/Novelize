import React, { useEffect, useState } from 'react'
import BooksCards from '../components/BooksCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
    }, [])
  return (
    <div>
      <BooksCards books={books} headline = "Best Seller Book"/>
    </div>
  )
}

export default BestSellerBooks
