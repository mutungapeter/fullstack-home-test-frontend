import '@fontsource/mulish';
import './App.css';

import { ApolloProvider } from '@apollo/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import client from './Client/client';
import Home from './components/Home';
import NavBar from './components/Navbar';
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
