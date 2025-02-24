import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/App.scss';
import Home from './pages/home/Home.tsx';
import Report from './pages/report/Report.tsx';
import Dashboard from './pages/dashboard/Dashboard.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsAndConditions from './pages/TermsAndConditions.tsx';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
