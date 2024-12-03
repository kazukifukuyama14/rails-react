import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecommenderBooks = () => {
  const { id } = useParams();
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`http://localhost:3000/api/v1/users/${id}`);
      const bookData = await response.json();
      setRecommendedBooks(bookData.data);
    };

    fetchBooks();
  }, [id]);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Books Recommended by This User</h2>
      <div className="row g-4">
        {recommendedBooks.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-warning text-center" role="alert">
              No books recommended yet.
            </div>
          </div>
        ) : (
          recommendedBooks.map((book) => (
            <div className="col-md-4" key={book.data.id}>
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.data.attributes.title}</h5>
                  <p className="card-text text-muted">
                    {book.data.attributes.author}
                  </p>
                  <p className="card-text">
                    {book.data.attributes.description}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecommenderBooks;
