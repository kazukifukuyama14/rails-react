import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecommenderBooks = () => {
  const { id } = useParams();
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`http://localhost:3000/api/v1/users/${id}`);

      const bookData = await response.json();
      setRecommendedBooks(bookData.data);
    };

    fetchBook();
  }, [id]);

  return (
    <div className="container my-5">
      <h2>Recommended Books</h2>
      <ul className="list-group">
        {recommendedBooks.length === 0 ? (
          <li className="list-group-item">No books recommended yet.</li>
        ) : (
          recommendedBooks.map((book) => (
            <li key={book.data.id} className="list-group-item">
              <h4>{book.data.attributes.title}</h4>
              <p>{book.data.attributes.author}</p>
              <p>{book.data.attributes.description}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RecommenderBooks;
