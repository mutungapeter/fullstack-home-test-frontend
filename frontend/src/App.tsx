import { useState } from 'react';
import '@fontsource/mulish';
import './App.css';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import client from './Client/client';
import BooksList from './components/BookList';
import SearchBook from './components/Search';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ReadingList from './components/ReadingList';
function App() {


  return (
    <>
      <ApolloProvider client={client}>
        {/* <NavBar />
        <SearchBook />
      <BooksList /> */}
       <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reading-list" element={<ReadingList />} />
      
        </Routes>
      </Router>
     
      </ApolloProvider>
    </>
  )
}

export default App
