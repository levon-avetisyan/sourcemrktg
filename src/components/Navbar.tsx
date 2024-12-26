import "./Navbar.scss"
import logo from '../assets/images/sourcemrktg-logo.svg';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg position-absolute navbar-dark pt-4">
            <div className="container-fluid">
                <a className="navbar-brand ps-5" href="#">
                    <img src={logo} alt="SourceMRKTG Logo"/>
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
                        <a className="nav-link px-5 active" aria-current="page" href="#questionnaire">
                            Join us
                        </a>
                        <a className="nav-link px-5 active" aria-current="page" href="#about">
                            About Us
                        </a>
                        <a className="nav-link px-5 active" aria-current="page" href="#values">
                            Our values
                        </a>
                        <a className="nav-link px-5 active" aria-current="page" href="#testimonials">
                            Testimonials
                        </a>
                        <a className="nav-link px-5 active" aria-current="page" href="#contact">
                            Contact us
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
