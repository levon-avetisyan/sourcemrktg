import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = Boolean(localStorage.getItem('token')); // Example check

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
