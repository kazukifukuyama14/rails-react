import React, { useState, useEffect } from 'react';
import Books from '../Books';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:3000/api/v1/books');
      const booksData = await response.json();
      setBooks(booksData);
    };

    fetchBooks();
  }, []);

  return (
    <>
      <h1>Books recommendations</h1>
      <Books booksData={books} fallbackText="No books available." />
    </>
  );
};

export default BookList;
