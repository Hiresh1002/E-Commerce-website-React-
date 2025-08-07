import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/UserDeshbord');
  };

  return (
    <div className="navbar">
      <nav className="nav-container">
        <h1 className="logo">Logo</h1>

        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Product">Product</Link></li>
        </ul>

        <div className="nav-actions">
          <Link to="/Login" className="nav-button">Login</Link>
          <button onClick={handleButton} className="dashboard-button">Dashboard</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
