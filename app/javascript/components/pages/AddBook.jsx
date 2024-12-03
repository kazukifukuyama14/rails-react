import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute('content');
    const response = await fetch('http://localhost:3000/api/v1/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify({ book: bookData }),
    });

    if (response.status === 401) {
      window.location.href = '/users/sign_in';
      return;
    }
    const newBook = await response.json();

    setBookData({ title: '', author: '', description: '' });
    navigate(`/books/${newBook.data.id}`);
  };

  return (
    <Container className="d-flex justify-content-center my-5">
      <Card className="shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Add a New Book</Card.Title>
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
              <Button variant="info" type="submit" className="w-100">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddBook;
