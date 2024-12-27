import './ContactSection.scss';
import EmbedMap from '../EmbedMap.tsx';

const ContactSection = () => {
  const offices = [
    {
      city: 'New York',
      address: '123 5th Avenue, Manhattan, NY 10001',
      phone: '+1 212-555-1234',
      email: 'ny-office@example.com',
    },
    {
      city: 'London',
      address: '456 Baker Street, London, UK W1U 7EW',
      phone: '+44 20 7946 0958',
      email: 'london-office@example.com',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="row">
        {/* Office Details */}
        <div className="col-md-2">
          <div className="contact-info">
            <h2 className="mb-5 section-title text-left">Contact Us</h2>
            {offices.map((office, index) => (
              <div key={index} className="mb-4">
                <h3>{office.city} Office</h3>
                <address>
                  <p>
                    <strong>Address:</strong> {office.address}
                  </p>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a href={`tel:${office.phone.replace(/\s+/g, '')}`}>{office.phone}</a>
                  </p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${office.email}`}>{office.email}</a>
                  </p>
                </address>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-3">
          <form className="contact-form">
            <div className="mb-3">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows={4}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-outline-light w-100">
              Send Message
            </button>
          </form>
        </div>

        {/* Embedded Map */}
        <div className="col-md-7">
          <EmbedMap />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
