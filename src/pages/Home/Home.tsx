import HeroSection from '../../sections/Hero/HeroSection.tsx';
import Navbar from '../../components/Navbar/Navbar.tsx';
import QuestionnaireSection from '../../sections/Questionnaire/QuestionnaireSection.tsx';
import AboutSection from '../../sections/About/AboutSection.tsx';
import TestimonialsSection from '../../sections/Testimonials/TestimonialsSection.tsx';
import ContactSection from '../../sections/Contact/ContactSection.tsx';
import ValuesSection from '../../sections/Values/ValuesSection.tsx';
import Footer from '../../sections/Footer/Footer.tsx';
import Trusted from '../../sections/Trusted/Trusted.tsx';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <Trusted />
      <TestimonialsSection />
      <QuestionnaireSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
