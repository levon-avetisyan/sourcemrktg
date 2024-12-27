import './Footer.scss';

const Footer = () => {
  return (
    <footer className="text-light py-3 ">
      <div className="container text-center">
        {/* Links Section */}
        <div className="mb-3">
          <a href="#hero" className="text-light text-decoration-none mx-2">
            Home
          </a>
          <a href="#questionnaire" className="text-light text-decoration-none mx-2">
            Join us
          </a>
          <a href="#about" className="text-light text-decoration-none mx-2">
            About us
          </a>
          <a href="#values" className="text-light text-decoration-none mx-2">
            Our values
          </a>
          <a href="#testimonials" className="text-light text-decoration-none mx-2">
            Testimonials
          </a>
          <a href="#contact" className="text-light text-decoration-none mx-2">
            Contact us
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="mb-3">
          <a
            href="https://facebook.com"
            className="text-light mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-light mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-light mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-top pt-2">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
