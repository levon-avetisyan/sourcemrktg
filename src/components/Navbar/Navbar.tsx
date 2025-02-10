import React from 'react';
import './Navbar.scss';
import logo from '../../assets/images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

interface IProps {
  theme?: string;
}

const Navbar: React.FC<IProps> = ({ theme }) => {
  const location = useLocation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = `/#${targetId}`;
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg position-absolute navbar-dark ${theme}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="SourceMRKTG Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/#questionnaire"
              onClick={(e) => handleScroll(e, 'questionnaire')}
            >
              Join us
            </Link>
            <Link
              className="nav-link active"
              aria-current="page"
              to="/#about"
              onClick={(e) => handleScroll(e, 'about')}
            >
              About Us
            </Link>
            <Link
              className="nav-link active"
              aria-current="page"
              to="/#values"
              onClick={(e) => handleScroll(e, 'values')}
            >
              Our values
            </Link>
            <Link
              className="nav-link active"
              aria-current="page"
              to="/#testimonials"
              onClick={(e) => handleScroll(e, 'testimonials')}
            >
              Testimonials
            </Link>
            <Link
              className="nav-link active"
              aria-current="page"
              to="/#contact"
              onClick={(e) => handleScroll(e, 'contact')}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
