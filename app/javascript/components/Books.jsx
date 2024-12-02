import React from 'react';
import { Link } from 'react-router-dom';

const Books = ({ booksData, fallbackText }) => {
  const books = booksData.data || [];

  return (
    <section className="row">
      {books.length === 0 && (
        <div className="col-12 text-center">
          <p className="text-muted">{fallbackText}</p>
        </div>
      )}
      {books.length > 0 &&
        books.map((book) => (
          <div key={book.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.attributes.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {book.attributes.author}
                </h6>
                <Link to={`/books/${book.id}`} className="btn btn-info mt-auto">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Books;
