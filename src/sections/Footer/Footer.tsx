import './Footer.scss';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
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
    <footer className="text-light py-3 ">
      <div className="container text-center">
        <div className="footer-nav mb-2">
          <Link
            to="/#hero"
            className="text-light text-decoration-none mx-2"
            onClick={(e) => handleScroll(e, 'hero')}
          >
            HOME
          </Link>
          <Link
            to="/#questionnaire"
            className="text-light text-decoration-none mx-2"
            onClick={(e) => handleScroll(e, 'questionnaire')}
          >
            JOIN US
          </Link>
          <Link
            to="/#about"
            className="text-light text-decoration-none mx-2"
            onClick={(e) => handleScroll(e, 'about')}
          >
            ABOUT US
          </Link>
          <Link
            to="/#values"
            className="text-light text-decoration-none mx-2"
            onClick={(e) => handleScroll(e, 'values')}
          >
            OUR VALUES
          </Link>
          <Link
            to="/#testimonials"
            className="text-light text-decoration-none mx-2"
            onClick={(e) => handleScroll(e, 'testimonials')}
          >
            TESTIMONIALS
          </Link>
          <Link
            to="/#contact"
            className="text-light text-decoration-none mx-2"
            onClick={(e) => handleScroll(e, 'contact')}
          >
            CONTACT
          </Link>
          <Link to="/privacy-policy" className="text-light text-decoration-none mx-2">
            PRIVACY POLICY
          </Link>
          <Link to="/terms-and-conditions" className="text-light text-decoration-none mx-2">
            TERMS & CONDITIONS
          </Link>
        </div>

        {/*<div className="mb-3">*/}
        {/*  <a*/}
        {/*    href="https://facebook.com"*/}
        {/*    className="text-light mx-2"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <i className="bi bi-facebook"></i>*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    href="https://twitter.com"*/}
        {/*    className="text-light mx-2"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <i className="bi bi-twitter"></i>*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    href="https://instagram.com"*/}
        {/*    className="text-light mx-2"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <i className="bi bi-instagram"></i>*/}
        {/*  </a>*/}
        {/*</div>*/}

        <div className="border-top pt-2 footer-copyright">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Source MRKTG. All rights reserved. 0.1.6
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
