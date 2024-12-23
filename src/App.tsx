import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Spinner } from './styles/CommonStyles';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sourcemrktg" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;
