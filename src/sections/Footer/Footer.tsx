import './Footer.scss';

const Footer = () => {
  return (
    <footer className="text-light py-3 ">
      <div className="container text-center">
        <div className="footer-nav mb-2">
          <a href="#hero" className="text-light text-decoration-none mx-2">
            HOME
          </a>
          <a href="#questionnaire" className="text-light text-decoration-none mx-2">
            JOIN US
          </a>
          <a href="#about" className="text-light text-decoration-none mx-2">
            ABOUT US
          </a>
          <a href="#values" className="text-light text-decoration-none mx-2">
            OUR VALUES
          </a>
          <a href="#testimonials" className="text-light text-decoration-none mx-2">
            TESTIMONIALS
          </a>
          <a href="#contact" className="text-light text-decoration-none mx-2">
            CONTACT
          </a>
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
