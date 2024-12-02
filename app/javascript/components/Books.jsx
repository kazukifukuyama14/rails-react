import React from 'react';
import { Link } from 'react-router-dom';

const Books = ({ booksData, fallbackText }) => {
  const books = booksData.data || [];

  return (
    <section>
      {books.length === 0 && <p>{fallbackText}</p>}
      {books.length > 0 && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h2>{book.attributes.title}</h2>

              <h3>{book.attributes.author}</h3>
              <p>{book.attributes.description}</p>
              <Link
                to={`/books/${book.id}`}
                className="btn btn-info btn-lg mb-5"
                role="button"
              >
                View Book Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Books;
