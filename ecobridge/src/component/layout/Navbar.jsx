import { Link } from 'react-router-dom';
import siteLinks from '../../links/siteLinks';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo on the left */}
        <Link className="navbar-brand fw-bold" to={siteLinks.home}>
          EcoBridge
        </Link>

        {/* Hamburger toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to={siteLinks.home}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={siteLinks.about}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={siteLinks.contact}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-dark ms-2" to={siteLinks.login}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
