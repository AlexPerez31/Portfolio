import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/avatar.jpg';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
      <div className="container px-5">

        <div className="navbar-brand d-flex align-items-center gap-2">
          <img
            src={logo}
            alt="Alex"
            className="rounded-circle border border-success"
            style={{ width: '28px', height: '28px', objectFit: 'cover' }}
          />
          <span className="fw-semibold text-white" style={{ fontSize: '14px' }}>
            Alex Jordán Pérez Rojas
          </span>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${isActive('/about')}`}>About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className={`nav-link ${isActive('/projects')}`}>Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
