import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Movie from './component/Movie';
import Music from './component/music';
import Sports from './component/Sports';
import Home from './component/Home';
import UserLogin from "./User.jsx/UserLogin";



function App() {
  // const notify = () => toast("Hello, this is a toast!");

  return (
      <>
        <Nav />

        {/* Example Toast Trigger */}
        {/* <button onClick={notify} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Show Toast
        </button> */}
        {/* <ToastContainer /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/music" element={<Music />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/userLogin" element={<UserLogin />} />

        </Routes>

        <Footer />
      </>
  );
}

export default App;
