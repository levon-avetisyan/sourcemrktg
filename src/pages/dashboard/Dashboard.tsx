import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './pages/Main/Main.scss';
import Main from './pages/Main/Main.tsx';
import Login from './pages/Login/Login.tsx';

const Dashboard: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="login" element={<Login />} />
      {/*<Route path="register" element={<Register />} />*/}
    </Routes>
  );
};

export default Dashboard;
