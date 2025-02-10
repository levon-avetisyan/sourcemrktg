import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Navbar theme="dark" />
      <section className="py-5">
        <div className="container mt-4">
          <div className="max-w-3xl mx-auto p-4 bg-light rounded shadow-sm">
            <h1 className="h3 font-bold mb-4">Terms and Conditions</h1>
            <p className="text-muted">Last Updated: January 31st, 2025</p>
            <p className="mt-4">
              Welcome to Sourcemrktg! These Terms and Conditions ("Terms") govern your access and
              use of
              <a href="https://sourcemrktg.com" className="text-primary">
                {' '}
                https://sourcemrktg.com
              </a>{' '}
              ("Website") and any related services ("Services") provided by Sourcemrktg ("Company,"
              "we," "us," or "our"). By using our Website, you agree to be bound by these Terms. If
              you do not agree with any part of these Terms, please do not use our Website or
              Services.
            </p>

            <h2 className="h4 font-semibold mt-5">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our Website and Services, you acknowledge that you have read,
              understood, and agreed to comply with these Terms, as well as our Privacy Policy.
            </p>

            <h2 className="h4 font-semibold mt-5">2. Services Provided</h2>
            <p>
              Sourcemrktg provides marketing and business development solutions, including but not
              limited to branding, advertising strategies, lead generation, and digital marketing
              services. We reserve the right to modify, expand, or discontinue any part of our
              Services at any time without prior notice.
            </p>

            <h2 className="h4 font-semibold mt-5">3. User Responsibilities</h2>
            <h3 className="h5 font-semibold mt-4">a. Eligibility</h3>
            <p>
              You must be at least 18 years old to use our Services. By using this Website, you
              represent that you meet this requirement.
            </p>
            <h3 className="h5 font-semibold mt-4">b. Account Information</h3>
            <p>
              If you create an account with us, you agree to provide accurate and up-to-date
              information. You are responsible for maintaining the confidentiality of your account
              credentials and are liable for any activities conducted through your account.
            </p>
            <h3 className="h5 font-semibold mt-4">c. Prohibited Activities</h3>
            <ul className="list-unstyled ml-3">
              <li className="mb-2">Use the Website for any unlawful purpose.</li>
              <li className="mb-2">
                Distribute or transmit malware, spam, or unauthorized advertising.
              </li>
              <li className="mb-2">Attempt to gain unauthorized access to our systems.</li>
              <li className="mb-2">
                Copy, modify, or resell any portion of our Website without explicit consent.
              </li>
            </ul>

            <h2 className="h4 font-semibold mt-5">4. Intellectual Property Rights</h2>
            <p>
              All content, trademarks, and intellectual property on this Website, including but not
              limited to text, graphics, logos, and software, belong to Sourcemrktg or its
              licensors. You may not reproduce, distribute, or use our intellectual property without
              prior written consent.
            </p>

            <h2 className="h4 font-semibold mt-5">5. Payment and Billing</h2>
            <p>
              For paid Services, you agree to provide accurate billing information and authorize us
              to charge you according to the agreed-upon terms. Fees are non-refundable unless
              explicitly stated otherwise.
            </p>

            <h2 className="h4 font-semibold mt-5">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Sourcemrktg shall not be liable for any
              direct, indirect, incidental, consequential, or punitive damages arising from your use
              of our Services, including but not limited to loss of revenue, data, or goodwill.
            </p>

            <h2 className="h4 font-semibold mt-5">7. Indemnification</h2>
            <p>
              You agree to indemnify and hold Sourcemrktg, its affiliates, partners, and employees
              harmless from any claims, losses, damages, liabilities, and expenses (including legal
              fees) arising from your violation of these Terms or misuse of our Services.
            </p>

            <h2 className="h4 font-semibold mt-5">8. Third-Party Links</h2>
            <p>
              Our Website may contain links to third-party websites. We do not endorse or take
              responsibility for any content, policies, or practices of these external sites. Your
              use of such websites is at your own risk.
            </p>

            <h2 className="h4 font-semibold mt-5">9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our Website or Services at
              our discretion, without notice, if we believe you have violated these Terms.
            </p>

            <h2 className="h4 font-semibold mt-5">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and interpreted in accordance with the laws of Utah,
              without regard to its conflict of law principles.
            </p>

            <h2 className="h4 font-semibold mt-5">11. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of our Services after any
              modifications indicates your acceptance of the revised Terms.
            </p>

            <h2 className="h4 font-semibold mt-5">12. Contact Information</h2>
            <p>If you have any questions regarding these Terms, please contact us at:</p>
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
              By using our Website, you agree to abide by these Terms and Conditions.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
