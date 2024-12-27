import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.scss';
import HeroSection from './components/sections/HeroSection.tsx';
import Navbar from './components/Navbar.tsx';
import QuestionnaireSection from './components/sections/QuestionnaireSection.tsx';
import AboutSection from './components/sections/AboutSection.tsx';
import TestimonialsSection from './components/sections/TestimonialsSection.tsx';
import ContactSection from './components/sections/ContactSection.tsx';
import ValuesSection from './components/sections/ValuesSection.tsx';
import Footer from './components/sections/Footer.tsx';
import Trusted from './components/sections/Trusted.tsx';

function App() {
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
}

export default App;
