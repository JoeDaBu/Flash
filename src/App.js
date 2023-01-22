import React from 'react';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <>
      <div className="mx-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
