import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import Home from './pages/Home';
import RecommenderBooks from './pages/RecommenderBooks';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/books/new" element={<AddBook />} />
        <Route path="/books/:id/edit" element={<EditBook />} />
        <Route path="/recommender/:id" element={<RecommenderBooks />} />
      </Routes>
    </Router>
  );
};

export default App;
