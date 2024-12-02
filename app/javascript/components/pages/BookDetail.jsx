import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [recommender, setRecommender] = useState(null);
  const [error, setError] = useState(null);

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
      <h1 className="text-center mb-4">{book?.attributes.title}</h1>
      <h4 className="text-center text-muted">{book?.attributes.author}</h4>
      <p>{book?.attributes.description || 'No description available.'}</p>
      <hr />
      {recommender && (
        <p className="text-muted">
          Recommended by: {recommender?.attributes.email}
        </p>
      )}
    </div>
  );
};

export default BookDetail;
