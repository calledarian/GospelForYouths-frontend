import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Videos from './pages/videos';



export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/videos' element={<Videos />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );

}