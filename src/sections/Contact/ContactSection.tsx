import './ContactSection.scss';
import ContactFormWidget from '../../components/ContactForm/ContactFormWidget.tsx';

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="mb-4 section-title text-left">Contact Us</h2>
      <p className="subtitle text-center text-light mb-4">
        Reach Out to Us – We're Just a Message Away!
      </p>
      <address>
        <p className="text-center">
          {/*<i className="bi bi-geo-alt"></i> 123 5th Avenue, Manhattan, NY 10001<br />*/}
          <div className="d-flex">
            <i className="bi bi-telephone me-2"></i> <a href="tel:+13614208449">+1 361-420-8449</a>
            <br />
            <i className="bi bi-envelope ms-3 me-2"></i>{' '}
            <a href="mailto:contact@sourcemrktg.com">contact@sourcemrktg.com</a>
          </div>
        </p>
      </address>

      <div className="row">
        <div className="col-12">
          <div className="contact-form">
            <ContactFormWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
