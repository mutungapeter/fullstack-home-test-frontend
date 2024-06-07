import React from 'react';
import SearchBook from './Search';
import BooksList from './BookList';
import NavBar from './Navbar';

const Home = () => {
  return (
    <div>
  
      <SearchBook />
      <BooksList />
    </div>
  );
};

export default Home;