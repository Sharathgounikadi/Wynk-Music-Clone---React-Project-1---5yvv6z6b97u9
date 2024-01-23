import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer';
import Playlists from './components/Playlists';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlists" element={<Playlists />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
