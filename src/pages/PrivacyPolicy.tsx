import React from 'react';
import Footer from '../sections/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Navbar theme="dark" />
      <section className="py-5">
        <div className="container mt-4">
          <div className="max-w-3xl mx-auto p-4 bg-light rounded shadow-sm">
            <h1 className="h3 font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted">Last Updated: January 31st, 2025</p>
            <p className="mt-4">
              Welcome to Sourcemrktg! Your privacy is important to us. This Privacy Policy explains
              how we collect, use, and protect your personal information when you visit our website
              <a href="https://sourcemrktg.com" className="text-primary">
                {' '}
                https://sourcemrktg.com
              </a>{' '}
              ("Website") and use our services ("Services"). By accessing or using our Website, you
              agree to the terms outlined in this Privacy Policy.
            </p>

            <h2 className="h4 font-semibold mt-5">1. Information We Collect</h2>
            <h3 className="h5 font-semibold mt-4">a. Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide, including but not
              limited to your name, email address, phone number, billing details, and any other
              details necessary for providing our Services.
            </p>
            <h3 className="h5 font-semibold mt-4">b. Non-Personal Information</h3>
            <p>
              We may also collect non-personal information such as your browser type, IP address,
              device information, and website usage analytics to improve our services.
            </p>

            <h2 className="h4 font-semibold mt-5">2. How We Use Your Information</h2>
            <ul className="list-unstyled ml-3">
              <li className="mb-2">To provide and improve our Services.</li>
              <li className="mb-2">
                To process transactions and send important account notifications.
              </li>
              <li className="mb-2">
                To personalize user experiences and analyze website usage trends.
              </li>
              <li className="mb-2">
                To communicate marketing and promotional materials (with your consent).
              </li>
              <li className="mb-2">
                To comply with legal obligations and protect against fraudulent activities.
              </li>
            </ul>

            <h2 className="h4 font-semibold mt-5">3. How We Share Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information. However, we may share your
              data with:
            </p>
            <ul className="list-unstyled ml-3">
              <li className="mb-2">
                <strong>Third-Party Service Providers:</strong> Vendors that assist in our
                operations, such as payment processors, email service providers, and analytics
                tools.
              </li>
              <li className="mb-2">
                <strong>Legal Compliance:</strong> If required by law, we may disclose your
                information to regulatory authorities or to protect our legal rights.
              </li>
              <li className="mb-2">
                <strong>Business Transfers:</strong> In case of a merger, acquisition, or sale of
                assets, your data may be transferred as part of the transaction.
              </li>
            </ul>

            <h2 className="h4 font-semibold mt-5">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information from
              unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the Internet is 100% secure. We encourage you to take precautionary
              measures when sharing sensitive data online.
            </p>

            <h2 className="h4 font-semibold mt-5">5. Your Rights and Choices</h2>
            <ul className="list-unstyled ml-3">
              <li className="mb-2">Access, update, or delete your personal information.</li>
              <li className="mb-2">Opt-out of marketing communications at any time.</li>
              <li className="mb-2">Request clarification on how your data is used.</li>
              <li className="mb-2">Restrict or object to certain data processing activities.</li>
            </ul>
            <p>
              To exercise your rights, please contact us at{' '}
              <a href="mailto:contact@sourcemrktg.com" className="text-primary">
                contact@sourcemrktg.com
              </a>
              .
            </p>

            <h2 className="h4 font-semibold mt-5">6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance user experience, analyze
              traffic, and personalize content. You can adjust your browser settings to refuse
              cookies, but some features of the Website may not function properly without them.
            </p>

            <h2 className="h4 font-semibold mt-5">7. Third-Party Links</h2>
            <p>
              Our Website may contain links to third-party websites. We are not responsible for the
              privacy practices of external sites and encourage you to review their policies before
              providing personal information.
            </p>

            <h2 className="h4 font-semibold mt-5">8. Children's Privacy</h2>
            <p>
              Our Services are not intended for individuals under the age of 18. We do not knowingly
              collect personal data from children. If we become aware of any such data collection,
              we will take steps to remove the information promptly.
            </p>

            <h2 className="h4 font-semibold mt-5">9. Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time. Changes will be posted
              on this page, and continued use of our Website after updates indicates your acceptance
              of the revised terms.
            </p>

            <h2 className="h4 font-semibold mt-5">10. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please contact us
              at:
            </p>
            <address className="mt-2">
              <p>
                <strong>Sourcemrktg</strong>
              </p>
              <p>297 S 760 W Orem, Utah 84058</p>
              <p>
                Email:{' '}
                <a href="mailto:nicolaas.vanleeuwen@sourcemrktg.com" className="text-primary">
                  nicolaas.vanleeuwen@sourcemrktg.com
                </a>
              </p>
              <p>Tax ID: 45-2721961</p>
            </address>

            <p className="mt-5">
              By using our Website, you acknowledge that you have read and understood this Privacy
              Policy.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
