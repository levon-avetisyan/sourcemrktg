import React from 'react';
import './Navbar.scss';
import logo from '../../assets/images/logo.svg';

interface IProps{
  theme?: string;
}
const Navbar: React.FC<IProps> = ({theme}) => {
  return (
    <nav className={`navbar navbar-expand-lg position-absolute navbar-dark ${theme}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="SourceMRKTG Logo" />
        </a>
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
            <a className="nav-link active" aria-current="page" href="#questionnaire">
              Join us
            </a>
            <a className="nav-link  active" aria-current="page" href="#about">
              About Us
            </a>
            <a className="nav-link active" aria-current="page" href="#values">
              Our values
            </a>
            <a className="nav-link active" aria-current="page" href="#testimonials">
              Testimonials
            </a>
            <a className="nav-link active" aria-current="page" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
