import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [recommender, setRecommender] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`http://localhost:3000/api/v1/books/${id}`);

      const bookData = await response.json();
      setBook(bookData.data);
      const recommenderData = bookData.included.find(
        (include) => include.type === 'user'
      );
      setRecommender(recommenderData);
    };

    fetchBook();
  }, [id]);

  return (
    <div className="container my-5">
      {book && (
        <div className="card shadow-sm">
          <div className="card-header text-center bg-success text-white">
            <h1>{book.attributes.title}</h1>
            <h4 className="text-light">{book.attributes.author}</h4>
          </div>
          <div className="card-body">
            <p className="card-text">
              {book.attributes.description || 'No description available.'}
            </p>
            <hr />
            {recommender && (
              <div className="mt-4">
                <p className="text-muted">
                  <strong>Recommended by:</strong>
                </p>
                <Link
                  to={`/recommender/${recommender.attributes.id}`}
                  className="btn btn-outline-info btn-lg"
                >
                  {recommender.attributes.email}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
