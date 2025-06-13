import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-dark-900 font-sans">
      <Outlet />
    </div>
  );
};

export default App;