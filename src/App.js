import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Videos from './pages/videos';
import Contact from './pages/contact';
import Gift from './pages/gift';



export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gift' element={<Gift />} />


        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );

}