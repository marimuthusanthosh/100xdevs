import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import React from 'react';

const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function AppRouter() {
  return (
    <BrowserRouter>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

function AppBar() {
  const navigate = useNavigate(); 

  return (
    <div>
      <button onClick={() => navigate('/')}>Landing Page</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </div>
  );
}

export default AppRouter;
