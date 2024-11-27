import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="display-4 mb-4">Welcome to Book Recommendations</h1>
          <p className="lead mb-4">
            Discover, share, and discuss the books that inspire you.
          </p>
          <Link to="/books" className="btn btn-info btn-lg mb-5" role="button">
            View Books
          </Link>
        </div>
      </div>
      <div className="row text-center mt-5">
        <div className="col-md-4">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Discover New Books</h5>
              <p className="card-text">
                Explore recommendations from readers around the world.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Share Your Favorites</h5>
              <p className="card-text">
                Add your own recommendations and share what you love.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Engage with the Community</h5>
              <p className="card-text">
                Comment on books and discuss your thoughts with others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
