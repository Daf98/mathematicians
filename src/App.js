import React from 'react';
import './Styles/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Calculate from './pages/Calculate';
import Quotes from './pages/Quotes';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator" element={<Calculate />} />
        <Route exact path="/quotes" element={<Quotes />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
