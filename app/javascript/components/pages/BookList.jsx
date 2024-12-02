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
    <div className="container my-5">
      <h1 className="text-center mb-4">Book Recommendations</h1>
      <Books booksData={books} fallbackText="No books available." />
    </div>
  );
};

export default BookList;
