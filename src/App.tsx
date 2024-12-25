import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.scss'
import HeroSection from "./components/sections/HeroSection.tsx";
import Navbar from "./components/Navbar.tsx";
import QuestionnaireSection from "./components/sections/QuestionnaireSection.tsx";

function App() {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <QuestionnaireSection/>
    </>
  )
}

export default App
