import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const EditBook = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    description: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`http://localhost:3000/api/v1/books/${id}`);
      const bookData = await response.json();
      setBookData({
        title: bookData.data.attributes.title,
        author: bookData.data.attributes.author,
        description: bookData.data.attributes.description,
      });
    };

    fetchBook();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute('content');
    const response = await fetch(`http://localhost:3000/api/v1/books/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify({ book: bookData }),
    });

    if (response.ok) {
      const updatedBook = await response.json();
      navigate(`/books/${updatedBook.data.id}`);
    } else if (response.status === 401) {
      alert('You are not authorized to delete this book.');
    } else {
      alert('Failed to delete the book. Please try again.');
    }
  };

  return (
    <Container className="d-flex justify-content-center my-5">
      <Card className="shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Edit Book</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book title"
                className="shadow-sm"
                name="title"
                value={bookData.title}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Book Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book author"
                className="shadow-sm"
                name="author"
                value={bookData.author}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter book description"
                className="shadow-sm"
                name="description"
                value={bookData.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="info" type="submit" className="w-100 mb-3">
                Update
              </Button>
              <Button
                variant="secondary"
                onClick={() => navigate(`/books/${id}`)}
                className="w-100"
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditBook;
