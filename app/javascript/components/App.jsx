import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="container mt-5">
        <h1 className="text-primary">Hello World</h1>
      </div>
    </Router>
  );
};

export default App;
