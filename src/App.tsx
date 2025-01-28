import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/App.scss';
import Home from './pages/Home/Home.tsx';
import DailyProgress from './pages/DailyProgres/DailyProgress.tsx';
import Dashboard from './pages/Dashboard/Dashboard.tsx';

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/sourcemrktg" element={<Home />} />
      <Route path="/daily-progress" element={<DailyProgress />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sourcemrktg/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
