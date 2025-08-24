import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/Home';
import Movie from './component/Movie';
import Music from './component/music';
import Sports from './component/Sports';
import Footer from './Footer';
import Nav from './Nav';
import Signup from "./User.jsx/Signup";
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
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/userLogin" element={<UserLogin/>} />



        </Routes>

        <Footer />
      </>
  );
}

export default App;
