import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeMenu = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
      <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
        <img src="/logo1.png" alt="Company Logo" className="company-logo" />
      </Link>

      <button 
        className="navbar-toggler" 
        type="button" 
        onClick={handleNavCollapse} 
        aria-controls="navbarNav" 
        aria-expanded={!isNavCollapsed} 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-center`} id="navbarNav">
        <ul className="navbar-nav nav-adjust">
          <li className="nav-item"><Link className="nav-link" to="/" onClick={closeMenu}>Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about" onClick={closeMenu}>About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/solutions" onClick={closeMenu}>Our Solution</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/gallery" onClick={closeMenu}>Gallery</Link></li>
          <li className="nav-item"><Link to="/?scrollTo=contact" onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })} className='nav-link'>
  Contact
</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
