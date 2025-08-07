import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Gallery from './Gallery';
import About from './About';
import UserDeshbord from './UserDeshbord';
import Product from './Product';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/UserDeshbord" element={<UserDeshbord/>} />

        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
